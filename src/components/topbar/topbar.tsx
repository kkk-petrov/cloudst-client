"use client"

import { FaAngleDown } from "react-icons/fa"
import cl from "./topbar.module.scss"
import { Button } from "../UI/button/button"
import { IoMdCloudDownload } from "react-icons/io"
import ThemeToggler from "../themeToggler/themeToggler"
import { useState } from "react"
import { Modal } from "../UI/modal/modal"
import { GoBellFill } from "react-icons/go"
import { Input } from "../UI/input/input"
import Image from "next/image"
import { UserModel } from "@/types"

export const Topbar = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const user: UserModel = { avatar: "", name: "", id: 1, email: "", isAdmin: false }

  const userAvatarUrl = user.avatar || "/user.png"

  return (
    <div className={cl.container}>
      <div className={cl.searchWrapper}>
        <Input />
      </div>

      <div style={{ display: "flex", alignItems: "center", height: "100%", }}>
        <div className={cl.themeToggler}>
          <ThemeToggler />
        </div>

        <button className={cl.notifications}>
          <GoBellFill size="25px" />
        </button>

        <Button style={{ borderRadius: 30, display: "flex", alignItems: "center", marginRight: 20 }}>
          <IoMdCloudDownload className={cl.uploadIcon} />
          Upload
        </Button>

        <div className={cl.user}>
          <Image alt="avatar" src={userAvatarUrl} height={30} width={30} className={cl.userAvatar} />
          <button className={cl.userButton} onClick={() => setIsModalActive(true)}>
            <span className={cl.userName}>User</span>
            <FaAngleDown className={cl.userButtonIcon} size="15px" />
          </button>
        </div>

        <Modal isActive={isModalActive} setIsActive={setIsModalActive}></Modal>
      </div>

    </div>
  )
} 
