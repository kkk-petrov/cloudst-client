import Link, { LinkProps } from "next/link"
import cl from "./navigate.module.scss"
import { ReactNode } from "react"

interface Props extends Omit<LinkProps, "href"> {
  to: string
  children: ReactNode
}

export const Navigate = ({ to, children, ...props }: Props) => {
  return (
    <Link className={cl.link} {...props} href={to}>{children}</Link>
  )
}
