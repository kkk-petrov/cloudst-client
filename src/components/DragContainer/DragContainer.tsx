
import { ReactNode, } from "react"
import { UploadFile } from "../UploadFile/UploadFile"
import cl from "./DragContainer.module.scss"
import { useDrag } from "@/hooks/useDrag"

interface Props {
  children: ReactNode
}

export const DragContainer = ({ children }: Props) => {
  const { isActive, setIsActive, handleDragOver, handleDragLeave } = useDrag()

  return (
    <div className={cl.container} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
      {children}
      <UploadFile isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}
