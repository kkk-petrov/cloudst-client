import { ReactNode, useCallback, useState } from "react"
import { UploadFileForm } from "../uploadFileForm/uploadFileForm"
import cl from "./dragContainer.module.scss"
import { useDrag } from "@/hooks/useDrag"

interface Props {
  children: ReactNode
}

export const DragContainer = ({ children }: Props) => {
  const { isActive, setIsActive, handleDragOver, handleDragLeave } = useDrag()

  return (
    <div className={cl.container} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      {children}
      <UploadFileForm isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}
