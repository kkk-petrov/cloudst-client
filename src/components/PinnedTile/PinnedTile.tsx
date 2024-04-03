import cl from "./PinnedTile.module.scss";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import { Link } from "../UI/Link/Link";
import { PinnedList } from "../PinnedList/PinnedList";
import { Tile } from "../UI/Tile/Tile";

export const PinnedTile = () => {
  return (
    <Tile>
      <div className={cl.pinned}>
        <div className={cl.pinnedText}>
          Pinned Files
          <Link to="/pinned">See More</Link>
        </div>
        <PinnedList />
      </div>
    </Tile>
  );
};
