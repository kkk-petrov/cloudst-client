import { Dispatch, SetStateAction, useCallback } from "react"
import { useDropzone } from 'react-dropzone'
import { Modal } from '../UI/Modal/Modal'
import cl from "./UploadFiles.module.scss"

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const UploadFiles = ({ isActive, setIsActive }: Props) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    // setFiles(acceptedFiles)
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // useEffect(() => {
  //   setIsActive(isDragActive)
  // }, [isDragActive])

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <div
        {...getRootProps()}
        className={`${cl.container}`}
      >

        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
    </Modal>
  )
}


//  ${isDragActive ? cl.visible : ""}
