import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useState,
} from "react";
import { useDropzone } from "react-dropzone";
import { Modal } from "../UI/Modal/Modal";
import cl from "./UploadFiles.module.scss";
import { FileList } from "../FileList/FileList";
import { Button } from "../UI/Button/Button";
import { filesService } from "@/services";

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const UploadFiles = ({ isActive, setIsActive }: Props) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
		setFiles((files) => [...files, ...acceptedFiles]);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	const [files, setFiles] = useState<File[]>([]);

	const handleRemoveFile = useCallback(
		(index: number) => {
			console.log(`File with index ${index} will be removed.`);
			const updatedFiles = files.filter((_, i) => i !== index);
			setFiles(updatedFiles);
		},
		[files],
	);

	const handleUploadFiles = async () => {
		const formData = new FormData();

		for (const file of files) {
			formData.append("file", file, file.name);
		}

		try {
			const response = await filesService.upload(formData);
			console.log("Upload response:", response.data);
		} catch (error) {
			console.error("Upload failed:", error);
		}
	};

	return (
		<Modal isActive={isActive} setIsActive={setIsActive}>
			<div
				{...getRootProps()}
				className={`${cl.container} ${isDragActive ? cl.active : ""}`}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag and drop some files here, or click to select files</p>
				)}
			</div>
			{files.length !== 0 && (
				<div className={cl.files}>
					<p className={cl.text}>Files to upload: </p>
					<FileList files={files} handleRemoveFile={handleRemoveFile} />
					<Button
						onClick={handleUploadFiles}
						style={{ width: "100%", marginTop: 10 }}
					>
						Upload
					</Button>
				</div>
			)}
		</Modal>
	);
};
