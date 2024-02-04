import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import cl from "./Input.module.scss"
import { ChangeEventHandler, InputHTMLAttributes, useRef, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  isValid: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({ label, isValid, onChange, ...props }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const ref = useRef<HTMLInputElement | null>(null)

  const togglePasswordVisibility = () => {
    if (ref.current?.type === "password") {
      ref.current!.type = "text"
      setIsPasswordVisible(true)
    } else {
      ref.current!.type = "password"
      setIsPasswordVisible(false)
    }
  }

  return (
    <div className={`${cl.container} ${!isValid && cl.error}`}>
      <label className={cl.label} htmlFor={props.name}>{label}</label>
      <span className={cl.inputWrapper}>
        <input
          {...props}
          className={cl.input}
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={onChange}
          ref={ref}
        />
        {
          props.type === "password" && !!ref.current?.value &&
          <button className={cl.show} onClick={togglePasswordVisibility}>
            {isPasswordVisible
              ? <FaRegEye size="20px" />
              : <FaRegEyeSlash size="20px" />
            }
          </button>
        }
      </span>
    </div>
  )
}
