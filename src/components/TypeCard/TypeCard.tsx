import { ReactNode } from "react"
import { FileIcon } from "../FileIcon/FileIcon"
import cl from './TypeCard.module.scss'
import { useNavigate } from "react-router-dom"

interface Props {
  type: string
  children: ReactNode
}

enum Colors {
  Orange = "#F84E11",
  Puprle = "#C211F8",
  Ltblue = "#00B8DF",
  Blue = "#5A96F5",
}

// TODO: file object instead of type prop
export const TypeCard = ({ type, children }: Props) => {
  const navigate = useNavigate()

  let color: Colors
  switch (type.toLowerCase()) {
    case "image":
      color = Colors.Orange
      break;
    case "video":
      color = Colors.Puprle
      break;
    case "audio":
      color = Colors.Ltblue
      break;
    default:
      color = Colors.Blue
      break;
  }

  const handleClick = () => {
    navigate(`/files?t=${type}`)
  }

  return (
    <li className={cl.card} onClick={handleClick} style={{ background: `${color}20` }}>
      <FileIcon type={type} />
      <div className={cl.cardInfo}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {children}
          <span>145 files</span>
        </div>
        2.3GB
      </div>
    </li>
  )
}
