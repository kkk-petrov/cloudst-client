import { ChangeEvent, Dispatch, DragEvent, FormEvent, SetStateAction, useCallback, useState } from "react"
import { Modal } from "../UI/modal/modal"
import cl from "./uploadFileForm.module.scss"
import { Button } from "../UI/button/button"

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const UploadFileForm = ({ isActive, setIsActive }: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isFileDragged, setIsFileDragged] = useState(false)

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  }, []);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  }, []);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFileDragged(true)
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('Selected files:', selectedFiles);
    setSelectedFiles([]);
    setIsActive(false);
  }, [selectedFiles, setIsActive]);

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <form className={cl.form} onSubmit={handleSubmit}>
        <div className={`${cl.wrapper} ${isFileDragged ? cl.drag : ""}`}
          onDrop={handleDrop}
          onDragLeave={() => setIsFileDragged(false)}
          onDragOver={handleDragOver}
        >
          <input className={cl.input} type="file" onChange={handleFileChange} multiple />

          <ul className={cl.list}>
            {selectedFiles.map((file) => (
              <li className={cl.item} key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
        <Button type="submit">Upload</Button>
      </form>
    </Modal>
  )
}
