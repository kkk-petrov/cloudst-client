import { FileIcon } from "../FileIcon/FileIcon";
import { TiPin } from "react-icons/ti";
import { useNavigate } from "react-router-dom"
import cl from "./PinnedList.module.scss"
import { useFilesStore } from "@/store/files.store";
import { truncateText } from "@/utils/strings";

export const PinnedList = () => {
  const pinned = useFilesStore(s => s.pinned)?.slice(0, 3);
  const togglePin = useFilesStore(s => s.actions.togglePin);
  const navigate = useNavigate();

  // TODO: open modal with file details 
  const handleClick = (id: number) => {
    navigate(`/pinned/${id}`);
  };

  const handleUnpin = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    return togglePin(id);
  }

  return (
    <ul className={cl.pinnedList}>
      {
        pinned && pinned.length > 0 ?
          pinned.map((item) => (
            <li className={cl.pinnedListItem} onClick={() => handleClick(item.id)} key={item.id}>
              <FileIcon size={40} filetype={item.type.split("/")[0]} />
              {truncateText(item.originalName, 30)}
              <TiPin className={cl.pin} onClick={(e) => handleUnpin(e, item.id)} />

            </li>
          ))
          : "No pinned files :("
      }
    </ul>
  )
}
