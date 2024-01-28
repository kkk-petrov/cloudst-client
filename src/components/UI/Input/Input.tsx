import cl from "./Input.module.scss"
import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ ...props }: Props) => {
  return (
    <div className={cl.wrapper}>
      <input className={cl.input} {...props} />
    </div>
  )
}
