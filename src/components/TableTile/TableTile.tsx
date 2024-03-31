import { Wrapper } from "../UI/Wrapper/Wrapper";
import cl from "./TableTile.module.scss";
import { FileIcon } from "../FileIcon/FileIcon";
import { HiDotsHorizontal } from "react-icons/hi";
import { users } from "@/dummy";
import { Link } from "../UI/Link/Link";
import { FaCaretDown } from "react-icons/fa";
import type { FileModel } from "@/types/models";
import { formatting, strings } from "@/utils";
import { filesService } from "@/services";
import { ID } from "@/types/common";

interface Props {
  title: string;
  files: FileModel[] | null;
  limit: number;
}

//FIXME: refactor
export const TableTile = ({ title, files, limit }: Props) => {
  const shared = users;

  const handleDownload = async (id: ID): Promise<void> => {
    return filesService.download(id);
  };

  return (
    <Wrapper>
      <div className={cl.container}>
        <div className={cl.text}>
          {title} <Link to="#">See More</Link>
        </div>
        {files && files.length !== 0 ? (
          <table className={cl.table}>
            <tr style={{ color: "#626366" }}>
              {/* <td><Checkbox /></td> */}
              <td className={cl.head}>
                Name{" "}
                <FaCaretDown
                  style={{ verticalAlign: "top" }}
                  size={20}
                  className={cl.sort}
                />
              </td>
              <td className={cl.head}>
                Type{" "}
                <FaCaretDown
                  style={{ verticalAlign: "top" }}
                  size={20}
                  className={cl.sort}
                />
              </td>
              <td className={cl.head}>
                Size{" "}
                <FaCaretDown
                  style={{ verticalAlign: "top" }}
                  size={20}
                  className={cl.sort}
                />
              </td>
              <td className={cl.head}>
                Last modified{" "}
                <FaCaretDown
                  style={{ verticalAlign: "top" }}
                  size={20}
                  className={`${cl.sort} ${cl.active}`}
                />
              </td>
              <td style={{ textAlign: "center" }}>Shared with</td>
              <td />
            </tr>
            {(limit ? files.slice(0, limit) : files).map((file) => (
              <tr key={file.id} onClick={() => handleDownload(file.id)}>
                {/* <td><Checkbox /></td> */}
                <td>
                  <FileIcon
                    filetype={file.type.split("/")[0]}
                    size={40}
                    style={{ marginRight: "15px" }}
                  />
                  {strings.truncateText(file.originalName, 15)}
                </td>
                <td>{file.type.split("/")[1].toUpperCase()}</td>
                <td>{formatting.formatBytes(file.size)}</td>
                <td>{formatting.formatDate(file.updatedAt)}</td>
                <td style={{ textAlign: "center" }}>
                  {file.sharedWith
                    ? shared.map((user) => (
                      <img
                        className={cl.img}
                        src={user.avatar === "" ? "/user.png" : user.avatar}
                        alt="avatar"
                        height={30}
                        width={30}
                        key={user.id}
                      />
                    ))
                    : "Only you"}
                </td>
                <td>
                  <HiDotsHorizontal className={cl.icon} size={26} />
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h1>No files found :(</h1>
        )}
      </div>
    </Wrapper>
  );
};
