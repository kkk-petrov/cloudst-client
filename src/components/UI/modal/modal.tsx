"use client"

import { ReactNode, FC, Dispatch, SetStateAction, useEffect } from "react"
import cl from "./modal.module.scss"

interface ModalProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  children?: ReactNode
}

export const Modal: FC<ModalProps> = ({ ...props }) => {
  return (
    <div className={`${cl.wrapper} ${props.isActive ? cl.active : ''}`} onClick={() => props.setIsActive(false)}>
      <div onClick={e => e.stopPropagation()} className={cl.modal}>{props.children}</div>
    </div>
  )
}
