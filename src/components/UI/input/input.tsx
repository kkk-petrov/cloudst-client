import cl from "./input.module.scss"
import React, { FC, InputHTMLAttributes } from 'react'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <div className={cl.wrapper}>
      <input className={cl.input} {...props} />
    </div>
  )
}
