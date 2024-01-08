import React from 'react'
import cl from './settingsTile.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { useRouter } from 'next/navigation'
import { FaGear } from 'react-icons/fa6';
import { SlOptions } from 'react-icons/sl';

export const SettingsTile = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/settings")
  }

  return (
    <Wrapper>
      <div className={cl.settings} onClick={() => handleClick}>
        {/* <FaGear className={cl.icon} size={100} /> */}
        <SlOptions className={cl.icon} size={70} />
      </div>
    </Wrapper>
  )
}
