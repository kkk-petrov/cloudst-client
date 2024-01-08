import cl from "./container.module.scss"
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className={cl.mainContainer}>{children}</div>
  )
}
