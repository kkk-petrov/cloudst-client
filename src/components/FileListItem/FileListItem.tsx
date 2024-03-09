import { useState } from "react";
import cl from "./FileListItem.module.scss";
import { FileIcon } from "../FileIcon/FileIcon";
import { truncateText } from "@/utils/stringUtils";
import { IoIosClose } from "react-icons/io";

interface Props {
	file: File;
	i: number;
	handleRemoveFile: (index: number) => void;
}

export const FileListItem = ({ file, i, handleRemoveFile }: Props) => {
	console.log(i);
	return (
		<li className={cl.item} key={i}>
			<FileIcon
				background={false}
				filetype={file.type.split("/")[0]}
				size={30}
			/>
			<p>{truncateText(file.name, 20)}</p>
			<p>{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
			<button className={cl.button} onClick={() => handleRemoveFile(i)}>
				<IoIosClose size={30} />
			</button>
		</li>
	);
};
