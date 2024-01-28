import cl from "./Container.module.scss"
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className={cl.mainContainer}>{children}</div>
  )
}
