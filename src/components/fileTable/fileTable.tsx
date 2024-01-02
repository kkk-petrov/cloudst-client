import { FileModel } from "@/types"
import { Wrapper } from "../UI/wrapper/wrapper"
import cl from "./fileTable.module.scss"
import Link from "next/link"
import Image from "next/image"
import { FileIcon } from "../fileIcon/fileIcon"

interface Props {
  title: string
  files: FileModel[]
}

export const FileTable = ({ title, files }: Props) => {
  return (
    <Wrapper>
      <div className={cl.container}>
        <div className={cl.text}>
          {title} <Link href="#">See More</Link>
        </div>
        <table className={cl.table}>
          <tr style={{ color: "#626366" }}>
            <td>Name</td>
            <td>Size</td>
            <td>Date</td>
            <td style={{ textAlign: "center" }}>Share with</td>
            <td></td>
          </tr>
          {files.map(file => (
            <tr>
              <td><FileIcon type={file.type} size={40} style={{ marginRight: "10px" }} />{file.originalName}</td>
              <td>{file.size}MB</td>
              <td>{file.createdAt}</td>
              <td style={{ textAlign: "center" }}>Only You</td>
              {/* <td><Image className={cl.img} src="/user.png" alt="avatar" height={30} width={30} style={{ borderRadius: "100%" }} /></td> */}
              <td>...</td>
            </tr>
          ))}
        </table>

      </div>
    </Wrapper>
  )
}
