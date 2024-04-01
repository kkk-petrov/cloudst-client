import { Dispatch, SetStateAction, ReactNode, HTMLAttributes } from "react"
import cl from "./Modal.module.scss"

interface Props extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean
  setIsActive: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}

export const Modal = ({ isActive, children, setIsActive }: Props) => {
  const classes = `${cl.wrapper} ${isActive ? cl.active : ''}`

  return (
    <div
      className={classes}
      onClick={() => setIsActive(false)}
    >
      <div onClick={e => e.stopPropagation()} className={cl.modal}>
        {children}
      </div>
    </div>
  )
}
