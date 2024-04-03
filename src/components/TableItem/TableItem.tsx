import { FileModel } from "@/types/models";
import cl from "./TableItem.module.scss";
import { FileIcon } from "@/components/FileIcon/FileIcon";
import { truncateText } from "@/utils/strings";
import { formatBytes, formatDate } from "@/utils/formatting";
import { SharedWith } from "@/components/SharedWith/SharedWith";
import { HiDotsHorizontal } from "react-icons/hi";
import { useFilesStore } from "@/store/files.store";
import { filesService } from "@/services";
import { ID } from "@/types/common";

interface Props {
  file: FileModel
}

export const TableItem = ({ file }: Props) => {
  const togglePin = useFilesStore((s) => s.actions.togglePin);

  const handleDownload = async (id: ID): Promise<void> => {
    return filesService.download(id);
  };

  const handleClick = async (e: React.MouseEvent, id: ID) => {
    e.stopPropagation();
    return togglePin(id);
  }

  return (

    <tr key={file.id} onClick={() => handleDownload(file.id)}>
      {/* <td><Checkbox /></td> TODO: checkbox*/}
      <td>
        <FileIcon
          filetype={file.type.split("/")[0]}
          size={40}
          style={{ marginRight: "15px" }}
        />
        {truncateText(file.originalName, 15)}
      </td>
      <td>{file.type.split("/")[1].toUpperCase()}</td>
      <td>{formatBytes(file.size)}</td>
      <td>{formatDate(file.updatedAt)}</td>
      <td style={{ textAlign: "center" }}>
        <SharedWith file={file} />
      </td>
      <td>
        <HiDotsHorizontal onClick={(e) => handleClick(e, file.id)} className={cl.icon} size={26} />
      </td>
    </tr>
  )
}
