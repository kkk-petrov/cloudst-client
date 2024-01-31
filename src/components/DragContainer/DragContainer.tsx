import { ReactNode, useCallback, useState } from "react";
import { UploadFiles } from "../UploadFiles/UploadFiles";
import cl from "./DragContainer.module.scss"

interface Props {
  children: ReactNode
}

export const DragContainer = ({ children }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const handleDragOver = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div
      className={cl.container}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
      <UploadFiles isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}
