import { ReactNode } from "react"
import { FileIcon } from "../fileIcon/fileIcon"
import cl from './typeCard.module.scss'
import Link from "next/link"
import { useRouter } from "next/navigation"

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
  const router = useRouter()

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

  const handleClick = () => {
    router.push("/files?t=" + type)
  }

  return (
    <li className={cl.card} onClick={handleClick} style={{ background: color + "20" }}>
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
