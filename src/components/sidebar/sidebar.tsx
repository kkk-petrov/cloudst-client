"use client"

import { useEffect, useState } from "react"
import { MdDashboard } from "react-icons/md";
import { IoMdHeartEmpty, IoMdTime } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import { BsGear, BsTrash3 } from "react-icons/bs";

import cl from "./sidebar.module.scss"
import { IconContext } from "react-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../UI/button/button";
import Image from "next/image";

export const Sidebar = () => {
  let pathname = usePathname()
  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])


  const [currentPage, setCurrentPage] = useState<string | null>(pathname)
  const nav = [
    { name: "dashboard", icon: <MdDashboard />, path: "/" },
    { name: "recent", icon: <IoMdTime />, path: "/recent" },
    { name: "favorites", icon: <IoMdHeartEmpty />, path: "/favorites" },
    { name: "shared", icon: <GoShareAndroid />, path: "/shared" },
    { name: "divider", icon: null, path: null },
    { name: "trash", icon: <BsTrash3 />, path: "/trash" },
    { name: "settings", icon: <BsGear />, path: "/settings" },
  ]

  return (
    <div className={cl.container}>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "25px" }}>
        <div className={cl.logo}>
          <Image alt="logo" className={cl.logoIcon} height={46} width={46} src="/logo.png" />
          Logo
        </div>

        <ul className={cl.navList}>
          {nav.map(item => (
            item.name !== "divider"
              ?
              <li key={item.name}>
                <Link
                  href={item.path || "error"}
                  className={`${cl.navListItem} ${item.path === currentPage ? cl.active : ""}`}
                >
                  <span className={cl.navListItemIcon}>{item.icon}</span>
                  {item.name}
                </Link>
              </li>
              :
              <div key={item.name} className={cl.navListItemDivider} />

          ))}
        </ul>

        <div className={cl.limit}>
          <div className={cl.limitInfo}>
            <span className={cl.limitInfoBar} />
            276GB of 500GB Used
          </div>
          {/* <button className={cl.limitButton}>Upgrade Now</button> */}
          <Button style={{ margin: "0 auto" }}>Upgrade Now</Button>
        </div>
      </IconContext.Provider>
    </div>
  )
}
