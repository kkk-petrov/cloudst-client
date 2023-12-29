"use client"

import { FC, Dispatch, SetStateAction, PropsWithChildren } from "react"
import cl from "./modal.module.scss"

interface ModalProps {
  isSidebarHidden: boolean
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ ...props }) => {
  const className = `${cl.wrapper} ${props.isActive ? cl.active : ''} ${props.isSidebarHidden ? cl.full : ''}`

  return (
    <div className={className} onClick={() => props.setIsActive(false)}>
      <div onClick={e => e.stopPropagation()} className={cl.modal}>
        {props.children}
      </div>
    </div>
  )
}
