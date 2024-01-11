import { DragContext } from "@/context/dragContext";
import { useContext } from "react";

export const useDrag = () => {
  return useContext(DragContext)
};
