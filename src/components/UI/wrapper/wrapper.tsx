import React, { FC, HTMLAttributes, PropsWithChildren } from 'react'
import cl from "./wrapper.module.scss"

export const Wrapper: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...props }) => {
  return (
    <div {...props} className={cl.container}>{children}</div>
  )
}
