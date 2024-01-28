import { DragContext } from "@/context/DragContext";
import { useContext } from "react";

export const useDrag = () => {
  return useContext(DragContext)
};
