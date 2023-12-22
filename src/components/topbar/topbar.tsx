"use client"

import { BsFilter, BsSearch } from "react-icons/bs"
import cl from "./topbar.module.scss"
import { Button } from "../UI/button/button"
import { IconContext } from "react-icons"
import { IoMdCloudDownload } from "react-icons/io"
import Image from "next/image"
import ThemeToggler from "../themeToggler/themeToggler"

export const Topbar = () => {
  return (
    <div className={cl.container}>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: "25px" }}>
        <div className={cl.search}>
          <BsSearch size={25} className={cl.searchIcon} />
          <input className={cl.searchInput} placeholder="Search something" type="text" />
          <BsFilter size={25} className={cl.searchFilter} />
        </div>

        <div className={cl.themeToggler}>
          <ThemeToggler />
        </div>
        {/* <div className={cl.notifications}> */}
        {/* </div> */}

        <div style={{ display: "flex", alignItems: "center", }}>

          <Button style={{ borderRadius: 30, display: "flex", alignItems: "center", marginRight: 20 }}>
            <IoMdCloudDownload className={cl.uploadIcon} />
            Upload
          </Button>
          <div className={cl.user}>
            <img alt="avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F89%2FPortrait_Placeholder.png&f=1&nofb=1&ipt=8a71e136699431db0f5c70ef82c7526f597c19f840fd8ae0e1205e582f84bc75&ipo=images" height={35} width={35} className={cl.userAvatar} />
            <span className={cl.userName}>User</span>

          </div>
        </div>

      </IconContext.Provider>
    </div>
  )
} 
