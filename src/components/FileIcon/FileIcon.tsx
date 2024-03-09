import { CSSProperties } from "react";
import cl from "./FileIcon.module.scss";
import { FaImage, FaMusic } from "react-icons/fa";
import { FaFileLines, FaVideo } from "react-icons/fa6";

const COLORS = {
	image: "#F84E11",
	video: "#C211F8",
	audio: "#00B8DF",
	undefined: "#5A96F5",
};

interface Props {
	filetype?: string;
	size?: number;
	background?: boolean;
	style?: CSSProperties;
}

export const FileIcon = ({
	filetype = "undefined",
	size = 40,
	background = true,
	style,
}: Props) => {
	let color = COLORS[filetype as keyof typeof COLORS];

	const styles = {
		background: `rgba(${color}, ${background === false ? 0 : 0.3})`,
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
