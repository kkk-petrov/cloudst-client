import { FileModel } from "@/types"
import { Wrapper } from "../UI/Wrapper/Wrapper"
import cl from "./TableTile.module.scss"
import { FileIcon } from "../FileIcon/FileIcon"
import { HiDotsHorizontal } from "react-icons/hi";
import { users } from "@/dummy"
import { Link } from "../UI/Link/Link"
import { FaCaretDown } from "react-icons/fa"

interface Props {
  title: string
  files: FileModel[]
}

export const TableTile = ({ title, files }: Props) => {
  const shared = users

  return (
    <Wrapper>
      <div className={cl.container}>
        <div className={cl.text}>
          {title} <Link to="#">See More</Link>
        </div>
        <table className={cl.table}>
          <tr style={{ color: "#626366" }}>
            {/* <td><Checkbox /></td> */}
            <td className={cl.head}>Name <FaCaretDown style={{ verticalAlign: "top" }} size={20} className={cl.sort} /></td>
            <td className={cl.head}>Type <FaCaretDown style={{ verticalAlign: "top" }} size={20} className={cl.sort} /></td>
            <td className={cl.head}>Size <FaCaretDown style={{ verticalAlign: "top" }} size={20} className={cl.sort} /></td>
            <td className={cl.head}>Last modified <FaCaretDown style={{ verticalAlign: "top" }} size={20} className={`${cl.sort} ${cl.active}`} /></td>
            <td style={{ textAlign: "center" }}>Shared with</td>
            <td />
          </tr>
          {files.map(file => (
            <tr key={file.id}>
              {/* <td><Checkbox /></td> */}
              <td><FileIcon type={file.type} size={40} style={{ marginRight: "15px" }} />{file.originalName}</td>
              <td>{file.type}</td>
              <td>{file.size >= 1000 ? `${(file.size / 1000).toFixed(1)} GB` : `${file.size} MB`}</td>
              <td>{file.updatedAt}</td>
              <td style={{ textAlign: "center" }}>
                {
                  file.sharedWith
                    ? shared.map(user => (
                      <img
                        className={cl.img}
                        src={user.avatar === "" ? "/user.png" : user.avatar}
                        alt="avatar"
                        height={30}
                        width={30}
                        key={user.id}
                      />
                    ))
                    : "Only you"
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
