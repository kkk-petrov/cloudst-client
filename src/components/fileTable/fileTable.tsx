import { FileModel } from "@/types"
import { Wrapper } from "../UI/wrapper/wrapper"
import cl from "./fileTable.module.scss"
import Link from "next/link"
import Image from "next/image"
import { FileIcon } from "../fileIcon/fileIcon"
import { HiDotsHorizontal } from "react-icons/hi";
import { users } from "@/dummy"
import { Navigate } from "../UI/navigate/navigate"

interface Props {
  title: string
  files: FileModel[]
}

export const FileTable = ({ title, files }: Props) => {
  const shared = users

  return (
    <Wrapper>
      <div className={cl.container}>
        <div className={cl.text}>
          {title} <Navigate to="#">See More</Navigate>
        </div>
        <table className={cl.table}>
          <tr style={{ color: "#626366" }}>
            <td>Name</td>
            <td>Size</td>
            <td>Date</td>
            <td style={{ textAlign: "center" }}>Shared with</td>
            <td></td>
          </tr>
          {files.map(file => (
            <tr key={file.id}>
              <td><FileIcon type={file.type} size={40} style={{ marginRight: "15px" }} />{file.originalName}</td>
              <td>{file.size >= 1000 ? `${(file.size / 1000).toFixed(1)} GB` : `${file.size} MB`}</td>
              <td>{file.createdAt}</td>
              <td style={{ textAlign: "center" }}>
                {
                  file.sharedWith
                    ? shared.map(user => (
                      <Image
                        className={cl.img}
                        src={user.avatar === "" ? "/user.png" : user.avatar}
                        alt="avatar"
                        height={30}
                        width={30}
                        key={user.id}
                      />
                    ))
                    : "Only You"
                }
              </td>
              <td><HiDotsHorizontal className={cl.icon} size={26} /></td>
            </tr>
          ))}
        </table>

      </div>
    </Wrapper>
  )
}
