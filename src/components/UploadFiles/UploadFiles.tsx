import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import {
	DropzoneInputProps,
	DropzoneRootProps,
	useDropzone,
} from "react-dropzone";
import { Modal } from "../UI/Modal/Modal";
import cl from "./UploadFiles.module.scss";

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const UploadFiles = ({ isActive, setIsActive }: Props) => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	useEffect(() => console.log(isDragActive), [isDragActive]);

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
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
		</Modal>
	);
};
