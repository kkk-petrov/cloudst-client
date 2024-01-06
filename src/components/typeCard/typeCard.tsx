import { ReactNode } from "react"
import { FileIcon } from "../fileIcon/fileIcon"
import cl from './typeCard.module.scss'

interface Props {
  type: string
  children: ReactNode
}

const enum Colors {
  Orange = "#F84E11",
  Puprle = "#C211F8",
  Ltblue = "#00B8DF",
  Blue = "#5A96F5",
}

// TODO: file instead of type
export const TypeCard = ({ type, children }: Props) => {
  let color
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

  return (
    <li className={cl.card} style={{ background: color + "20" }}>
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
