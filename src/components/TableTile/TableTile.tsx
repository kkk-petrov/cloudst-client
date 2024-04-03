import cl from "./TableTile.module.scss";
import { Link } from "../UI/Link/Link";
import type { FileModel } from "@/types/models";
import { Tile } from "../UI/Tile/Tile";
import { Table } from "../UI/Table/Table";

interface Props {
  title: string;
  files: FileModel[] | null;
  limit?: number;
}

//FIXME: refactor this shit
export const TableTile = ({ title, files, limit }: Props) => {

  return (
    <Tile>
      <div className={cl.container}>
        <div className={cl.text}>
          {title} <Link to="/recent">See More</Link>
        </div>
        {files && files.length !== 0 ? (
          <Table files={limit ? files.slice(0, limit) : files} />
        ) : (
          <h1>No files found :(</h1>
        )}
      </div>
    </Tile>
  );
};
