import React from 'react'
import cl from "./logo.module.scss"
import { FaCloud } from 'react-icons/fa'

export const Logo = () => {
  return (
    <div className={cl.logo}>
      <FaCloud className={cl.logoIcon} size="45px" />
      <div className={cl.text}>Sky Vault</div>
    </div>
  )
}
