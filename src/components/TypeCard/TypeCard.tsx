import { useFilesStore } from "@/store/files.store";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FileIcon } from "../FileIcon/FileIcon";
import cl from "./TypeCard.module.scss";
import { formatBytes } from "@/utils/formatting";
import { Filetype } from "@/types/api";

interface Props {
  filetype?: string;
  children: ReactNode;
}

const Colors = {
  orange: "#F84E11",
  puprle: "#C211F8",
  ltblue: "#00B8DF",
  blue: "#5A96F5",
}

// TODO: file object instead of type prop
export const TypeCard = ({ filetype = "other", children }: Props) => {
  const navigate = useNavigate();

  const storage = useFilesStore((state) => state.storage);
  const current = storage?.types?.[filetype as Filetype] || { count: 0, size: 0 };

  const count = current.count;
  const size = current.size;

  let color
  switch (filetype.toLowerCase()) {
    case "image":
      color = Colors.orange;
      break;
    case "video":
      color = Colors.puprle;
      break;
    case "audio":
      color = Colors.ltblue;
      break;
    default:
      color = Colors.blue;
      break;
  }

  const handleClick = () => {
    navigate(`/files?t=${filetype}`);
  };

  let id;
  switch (filetype.toLowerCase()) {
    case "image":
      id = cl.image;
      break;
    case "video":
      id = cl.video;
      break;
    case "audio":
      id = cl.audio;
      break;
  }

  return (
    <li className={cl.card} onClick={handleClick} id={id}>
      <FileIcon filetype={filetype} background />
      <div className={cl.cardInfo}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {children}
          <span>{count} files</span>
        </div>
        {formatBytes(size, 1)}
      </div>
    </li>
  );
};
