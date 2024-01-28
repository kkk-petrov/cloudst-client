import { HTMLAttributes } from 'react'
import cl from "./Wrapper.module.scss"

interface Props extends HTMLAttributes<HTMLDivElement> { }

export const Wrapper = ({ children, ...props }: Props) => {
  return (
    <div {...props} className={cl.container}>{children}</div>
  )
}
