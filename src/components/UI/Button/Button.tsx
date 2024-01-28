import { HTMLAttributes, ReactNode } from "react"
import cl from "@/components/UI/button/Button.module.scss"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: "button" | "submit" | "reset"
}

export const Button = ({ children, type, ...props }: Props) => {

  return (
    <button type={type} {...props} className={cl.button}>{children}</button>
  )
}
