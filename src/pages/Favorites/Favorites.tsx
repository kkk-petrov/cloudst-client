import { PinnedTile } from "@/components/PinnedTile/PinnedTile";
import { SettingsTile } from "@/components/SettingsTile/SettingsTile";
import { StorageTile } from "@/components/StorageTile/StorageTile";
import { TypeTile } from "@/components/TypeTile/TypeTile";
import { Tile } from "@/components/UI/Tile/Tile"
import { useFilesStore } from "@/store/files.store";
import cl from "./Favorites.module.scss"
import { TableTile } from "@/components/TableTile/TableTile";

export const Favorites = () => {
  const files = useFilesStore((state) => state.files);
  return (
    <div className={cl.container}>

      <TableTile title="Recent Files" files={files} />

    </div>
  )
}
// <TypeTile />
// <PinnedTile />
// <StorageTile />
// <SettingsTile />
