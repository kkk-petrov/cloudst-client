import { HTMLAttributes } from "react"
import cl from "@/components/UI/button/button.module.scss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {

  return (
    <button className={cl.button} {...props}>{children}</button>
  )
}
