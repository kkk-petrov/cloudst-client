import { SidebarContext } from "@/context/sidebarContext";
import { useContext } from "react";

export const useSidebar = () => {
  return useContext(SidebarContext);
};
