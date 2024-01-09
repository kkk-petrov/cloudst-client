import { Inter } from "next/font/google"
import cl from "./container.module.scss"
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}


const inter = Inter({ subsets: ['latin'] })


export const Container = ({ children }: Props) => {
  return (
    <div className={`${cl.mainContainer} ${inter.className}`}>{children}</div>
  )
}
