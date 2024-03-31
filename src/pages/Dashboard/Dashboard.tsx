import "@/styles/globals.scss";
import cl from "./Dashboard.module.scss";
import { TypeTile } from "@/components/TypeTile/TypeTile";
import { SettingsTile } from "@/components/SettingsTile/SettingsTile";
import { PinnedTile } from "@/components/PinnedTile/PinnedTile";
import { StorageTile } from "@/components/StorageTile/StorageTile";
import { TableTile } from "@/components/TableTile/TableTile";
import { useEffect, useState } from "react";
import { filesService } from "@/services";
import type { FileModel } from "@/types/models";
import { useFilesStore } from "@/store/files.store";

export const Dashboard = () => {
  // const [files, setFiles] = useState<FileModel[]>([]);
  //
  // const fetchFiles = async () => {
  //   const fetchedFiles = await filesService.getAll({ limit: 5, recent: true });
  //   setFiles(fetchedFiles);
  // };
  //
  // useEffect(() => {
  //   fetchFiles();
  // }, []);

  const files = useFilesStore((state) => state.files);
  console.log(files)

  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <TypeTile />
        <PinnedTile />
        <StorageTile />
        <SettingsTile />
      </div>
      <TableTile title="Recent Files" files={files} limit={5} />
    </div>
  );
};
