import { ChangeEvent, Dispatch, DragEvent, FormEvent, SetStateAction, useCallback, useState } from "react"
import { Modal } from "../UI/Modal/Modal"
import cl from "./UploadFile.module.scss"
import { Button } from "../UI/Button/Button"
import { useDrag } from "@/hooks/useDrag"
// import Dropzone from "react-dropzone"

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const UploadFile = ({ isActive, setIsActive }: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isFileDragged, _setIsFileDragged] = useState(false)
  const { handleDragOver, handleDragLeave } = useDrag()

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  }, []);

  const handleDrop = useCallback((e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  }, []);

  // const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   setIsFileDragged(true)
  // }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log('Selected files:', selectedFiles);
    setSelectedFiles([]);
    setIsActive(false);
  }, [selectedFiles, setIsActive]);

  return (
    <Modal style={{ pointerEvents: "none" }} isActive={isActive} setIsActive={setIsActive}>
      <form
        className={cl.form}
        onSubmit={handleSubmit}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >

        <div className={`${cl.wrapper} ${isFileDragged ? cl.drag : ""}`}>
          <input className={cl.input} type="file" onChange={handleFileChange} multiple />
          <div>
            Drag and drop files here
          </div>

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
