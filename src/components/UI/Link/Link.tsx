import { Link as RouterLink, LinkProps } from "react-router-dom"
import cl from "./Link.module.scss"
import { ReactNode } from "react"

interface Props extends LinkProps {
  children: ReactNode
}

export const Link = ({ children, ...props }: Props) => {
  return (
    <RouterLink className={cl.link} {...props}>{children}</RouterLink>
  )
}
