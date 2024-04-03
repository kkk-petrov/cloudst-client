import { HTMLAttributes } from "react";
import cl from "./Tile.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {

}

export const Tile = ({ children, ...props }: Props) => {

  return (
    <div
      {...props}
      className={cl.tile}
    >
      {children}
    </div>
  )

}
