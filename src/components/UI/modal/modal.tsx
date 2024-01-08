import { Dispatch, SetStateAction, ReactNode } from "react"
import cl from "./modal.module.scss"
import { useSidebar } from "@/hooks/useSidebar"

interface Props {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export const Modal = ({ isActive, children, setIsActive }: Props) => {
  const { isSidebarHidden } = useSidebar()
  const className = `${cl.wrapper} ${isActive ? cl.active : ''} ${isSidebarHidden ? cl.full : ''}`

  return (
    <div className={className} onClick={() => setIsActive(false)}>
      <div onClick={e => e.stopPropagation()} className={cl.modal}>
        {children}
      </div>
    </div>
  )
}
