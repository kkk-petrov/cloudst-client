import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdHeartEmpty, IoMdTime } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { BsGear, BsTrash3 } from "react-icons/bs";

import cl from "./Sidebar.module.scss";
import { Button } from "../UI/Button/Button";
import { Logo } from "../UI/Logo/Logo";
import { Link, useLocation } from "react-router-dom";
import { useFilesStore } from "@/store/files.store";
import { formatBytes } from "@/utils/formatting";
import { ProgressBar } from "../UI/ProgressBar/ProgressBar";

export const Sidebar = () => {
  const currentPage = useLocation().pathname.split("/")[1] || "/";
  const storage = useFilesStore((state) => state.storage)
  const total = formatBytes(storage.total, 0)
  const used = formatBytes(storage.used)

  console.log(storage)


  const [isWrapperHovered, setIsWrapperHovered] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(
    window.innerWidth < 1400,
  );

  const nav = [
    { name: "dashboard", icon: <MdDashboard />, path: "/" },
    { name: "recent", icon: <IoMdTime />, path: "recent" },
    { name: "favorites", icon: <IoMdHeartEmpty />, path: "favorites" },
    { name: "shared", icon: <GoShareAndroid />, path: "shared" },
    { name: "divider", icon: null, path: null },
    { name: "trash", icon: <BsTrash3 />, path: "trash" },
    { name: "settings", icon: <BsGear />, path: "settings" },
  ];

  return (
    <div className={`${cl.container} ${isSidebarHidden ? cl.hidden : ""}`}>
      <div
        className={`${cl.wrapper} ${isWrapperHovered && !isSidebarHidden ? cl.wrapperActive : ""
          }`}
      />
      <div className={cl.logoContainer}>
        <Logo />
      </div>

      <button
        className={cl.hide}
        onClick={() => setIsSidebarHidden((prev) => !prev)}
        onMouseOver={() => setIsWrapperHovered(true)}
        onMouseLeave={() => setIsWrapperHovered(false)}
      >
        <div className={`${cl.top} ${isSidebarHidden && cl.topRev}`} />
        <div className={`${cl.bot} ${isSidebarHidden && cl.botRev}`} />
      </button>

      <ul className={cl.navList}>
        {nav.map((item) =>
          item.name !== "divider" ? (
            <li key={item.name}>
              <Link
                to={item.path || "error"}
                className={`${cl.navListItem} ${item.path === currentPage ? cl.active : ""
                  }`}
              >
                <span className={cl.navListItemIcon}>{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ) : (
            <div key={item.name} className={cl.navListItemDivider} />
          ),
        )}
      </ul>

      <div className={cl.limit}>
        <div className={cl.limitInfo}>
          {/*<span className={cl.limitInfoBar} />*/}
          <ProgressBar percentage={Math.round((Number.parseInt(used) / Number.parseInt(total)))} />
          {`${used} of ${total} `}
          Used
        </div>
        <div className={cl.limitButton}>
          <Button>Upgrade Now</Button>
        </div>
      </div>
    </div>
  );
};
