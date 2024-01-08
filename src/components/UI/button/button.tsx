import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from "react"
import cl from "@/components/UI/button/button.module.scss"

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: "button" | "submit" | "reset"
}

export const Button = ({ children, type, ...props }: Props) => {

  return (
    <button type={type} {...props} className={cl.button}>{children}</button>
  )
}
