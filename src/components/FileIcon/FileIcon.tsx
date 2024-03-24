import { CSSProperties } from "react";
import cl from "./FileIcon.module.scss";
import { FaImage, FaMusic } from "react-icons/fa";
import { FaFileLines, FaVideo } from "react-icons/fa6";

const COLORS = {
	image: "#F84E11",
	video: "#C211F8",
	audio: "#00B8DF",
	unknown: "#5A96F5",
};

enum FILETYPES {
	image = 0,
	video = 1,
	audio = 2,
}

interface Props {
	filetype?: string;
	size?: number;
	background?: boolean;
	style?: CSSProperties;
}

export const FileIcon = ({
	filetype = "unknown",
	size = 40,
	background = true,
	style,
}: Props) => {
	if (!(filetype in FILETYPES)) {
		filetype = "unknown";
	}
	const color = COLORS[filetype as keyof typeof COLORS];

	const styles = {
		background: `${color}${background ? "30" : "00"}`,
		width: size,
		height: size,
		...style,
	};

	switch (filetype.toLowerCase()) {
		case "audio":
			return <FaMusic className={cl.icon} id={cl.audio} style={styles} />;
		case "image":
			return <FaImage className={cl.icon} id={cl.image} style={styles} />;
		case "video":
			return <FaVideo className={cl.icon} id={cl.video} style={styles} />;
		default:
			return <FaFileLines className={cl.icon} id={cl.docs} style={styles} />;
	}
};
