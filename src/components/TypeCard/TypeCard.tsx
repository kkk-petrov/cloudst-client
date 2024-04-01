import { useFilesStore } from "@/store/files.store";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { FileIcon } from "../FileIcon/FileIcon";
import cl from "./TypeCard.module.scss";
import { formatBytes } from "@/utils/formatting";
import { Filetype, StorageInfoTypes } from "@/types/api";

interface Props {
  filetype?: string;
  children: ReactNode;
}

enum Colors {
  Orange = "#F84E11",
  Puprle = "#C211F8",
  Ltblue = "#00B8DF",
  Blue = "#5A96F5",
}

// TODO: file object instead of type prop
export const TypeCard = ({ filetype = "other", children }: Props) => {
  const navigate = useNavigate();
  const storage = useFilesStore((state) => state.storage);
  const current = storage.types![filetype as Filetype];
  const count = current.count || 0;
  const size = current.size || 0;


  let color: Colors;
  switch (filetype.toLowerCase()) {
    case "image":
      color = Colors.Orange;
      break;
    case "video":
      color = Colors.Puprle;
      break;
    case "audio":
      color = Colors.Ltblue;
      break;
    default:
      color = Colors.Blue;
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
