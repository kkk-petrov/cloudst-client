import React from 'react'
import cl from './fileIcon.module.scss'
import { FaImage, FaMusic } from 'react-icons/fa'
import { FaFileLines, FaVideo } from 'react-icons/fa6'

interface Props {
  type: string
  size?: number
  background?: boolean
}

export const FileIcon = ({ type, size, background }: Props) => {
  const style = {
    width: size,
    height: size,
  }

  switch (type) {
    case "audio":
      return (
        <FaMusic className={cl.icon} id={cl.audio} style={style} />
      )
    case "image":
      return (
        <FaImage className={cl.icon} id={cl.image} style={style} />
      )
    case "video":
      return (
        <FaVideo className={cl.icon} id={cl.video} style={style} />
      )
    default:
      return (
        <FaFileLines className={cl.icon} id={cl.docs} style={style} />
      )
  }
}
