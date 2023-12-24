"use client"

import { FC, Dispatch, SetStateAction, PropsWithChildren } from "react"
import cl from "./modal.module.scss"

interface ModalProps {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ ...props }) => {

  return (
    <div className={`${cl.wrapper} ${props.isActive ? cl.active : ''}`} onClick={() => props.setIsActive(false)}>
      <div onClick={e => e.stopPropagation()} className={cl.modal}>
        {props.children}
      </div>
    </div>
  )
}
