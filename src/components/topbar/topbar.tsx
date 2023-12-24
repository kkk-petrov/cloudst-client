"use client"

import { BsFilter, BsSearch } from "react-icons/bs"
import { FaAngleDown } from "react-icons/fa"
import cl from "./topbar.module.scss"
import { Button } from "../UI/button/button"
import { IoMdCloudDownload } from "react-icons/io"
import ThemeToggler from "../themeToggler/themeToggler"
import { useEffect, useRef, useState } from "react"
import { Modal } from "../UI/modal/modal"

export const Topbar = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  const [isModalActive, setIsModalActive] = useState(true)

  const handleOpenModal = () => {

    console.log("set modal to ", isModalActive)
    setIsModalActive(true)
  }

  return (
    <div className={cl.container}>
      <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
        <BsSearch size={25} className={cl.searchIcon} />
        <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" />
        <BsFilter size={25} className={cl.searchFilter} />
      </div>

      <div className={cl.themeToggler}>
        <ThemeToggler />
      </div>
      {/* <div className={cl.notifications}> */}
      {/* </div> */}

      <div style={{ display: "flex", alignItems: "center", height: "100%", }}>

        <Button style={{ borderRadius: 30, display: "flex", alignItems: "center", marginRight: 20 }}>
          <IoMdCloudDownload className={cl.uploadIcon} />
          Upload
        </Button>
        <div className={cl.user}>
          <img alt="avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F89%2FPortrait_Placeholder.png&f=1&nofb=1&ipt=8a71e136699431db0f5c70ef82c7526f597c19f840fd8ae0e1205e582f84bc75&ipo=images" height={30} width={30} className={cl.userAvatar} />
          <button className={cl.userButton} onClick={handleOpenModal}>
            <span className={cl.userName}>User</span>
            <FaAngleDown className={cl.userButtonIcon} size="15px" />
          </button>
        </div>
        <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
          <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
            <BsSearch size={25} className={cl.searchIcon} />
            <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" />
            <BsFilter size={25} className={cl.searchFilter} />
          </div>
          <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
            <BsSearch size={25} className={cl.searchIcon} />
            <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" />
            <BsFilter size={25} className={cl.searchFilter} />
          </div>
        </Modal>
      </div>

    </div>
  )
} 
