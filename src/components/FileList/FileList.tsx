import cl from "./FileList.module.scss";
import { FileListItem } from "../FileListItem/FileListItem";

interface Props {
	files: File[];
	handleRemoveFile: (index: number) => void;
}

export const FileList = ({ files, handleRemoveFile }: Props) => {
	return (
		<ul className={cl.list}>
			{files.map((file, i) => (
				<FileListItem
					file={file}
					key={i} // FIXME: avoid using index as key
					index={i}
					handleRemoveFile={handleRemoveFile}
				/>
			))}
		</ul>
	);
};
