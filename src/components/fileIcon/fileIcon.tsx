import React, { CSSProperties } from 'react'
import cl from './fileIcon.module.scss'
import { FaImage, FaMusic } from 'react-icons/fa'
import { FaFileLines, FaVideo } from 'react-icons/fa6'

interface Props {
  type: string
  size?: number
  background?: boolean
  style?: CSSProperties
}

export const FileIcon = ({ type, size, background, style }: Props) => {
  const styles = {
    width: size,
    height: size,
    ...style
  }

  switch (type.toLowerCase()) {
    case "audio":
      return (
        <FaMusic className={cl.icon} id={cl.audio} style={styles} />
      )
    case "image":
      return (
        <FaImage className={cl.icon} id={cl.image} style={styles} />
      )
    case "video":
      return (
        <FaVideo className={cl.icon} id={cl.video} style={styles} />
      )
    default:
      return (
        <FaFileLines className={cl.icon} id={cl.docs} style={styles} />
      )
  }
}
