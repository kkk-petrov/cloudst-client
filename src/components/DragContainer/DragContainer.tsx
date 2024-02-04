import { ReactNode, useCallback, useEffect, useState } from "react";
import { UploadFiles } from "../UploadFiles/UploadFiles";
import cl from "./DragContainer.module.scss"
import { useDrag } from "@/context/DragContext";
import { useDropzone } from "react-dropzone";

interface Props {
  children: ReactNode
}

export const DragContainer = ({ children }: Props) => {
  const { isActive, setIsActive, handleDragOver, handleDragLeave } = useDrag()
  // const [isActive, setIsActive] = useState(false)
  //
  // const handleDragOver = useCallback(() => {
  //   setIsActive(true);
  // }, []);
  //
  // const handleDragLeave = useCallback(() => {
  //   setIsActive(false);
  // }, []);

  return (
    <div
      className={cl.container}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
      <UploadFiles
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  )
}
