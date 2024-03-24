import cl from "./FileListItem.module.scss";
import { FileIcon } from "../FileIcon/FileIcon";
import { IoIosClose } from "react-icons/io";
import { strings } from "@/utils";

interface Props {
	file: File;
	index: number;
	handleRemoveFile: (index: number) => void;
}

export const FileListItem = ({ file, index, handleRemoveFile }: Props) => {
	console.log(index);
	return (
		<li className={cl.item}>
			<FileIcon
				background={false}
				filetype={file.type.split("/")[0]}
				size={30}
			/>
			<p>{strings.truncateText(file.name, 20)}</p>
			<p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
			<button className={cl.button} onClick={() => handleRemoveFile(index)}>
				<IoIosClose size={30} />
			</button>
		</li>
	);
};
