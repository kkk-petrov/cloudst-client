import cl from "./TypeTile.module.scss";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import { TypeCard } from "../TypeCard/TypeCard";
import { Tile } from "../UI/Tile/Tile";

export const TypeTile = () => {
  return (
    <Tile>
      <ul className={cl.typeList}>
        <TypeCard filetype="image">Images</TypeCard>
        <TypeCard filetype="video">Video</TypeCard>
        <TypeCard filetype="audio">Audio</TypeCard>
        <TypeCard>Documents</TypeCard>
      </ul>
    </Tile>
  );
};
