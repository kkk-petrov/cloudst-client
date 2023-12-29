import { FC, HTMLAttributes, PropsWithChildren } from "react"
import cl from "@/components/UI/button/button.module.scss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> { }

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {

  return (
    <button {...props} className={cl.button}>{children}</button>
  )
}
