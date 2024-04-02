import "@/styles/globals.scss";
import cl from "./Recent.module.scss";
import { TableTile } from "@/components/TableTile/TableTile";
import { useFilesStore } from "@/store/files.store";

export const Recent = () => {
  const files = useFilesStore((state) => state.files);
  return (
    <div className={cl.container}>
      <TableTile title="Recent Files" files={files} />
    </div>
  );
};
