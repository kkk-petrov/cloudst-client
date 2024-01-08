"use client"

import { FaAngleDown } from "react-icons/fa"
import cl from "./topbar.module.scss"
import { Button } from "../UI/button/button"
import { IoMdCloudDownload } from "react-icons/io"
import ThemeToggler from "../themeToggler/themeToggler"
import { useState } from "react"
import { Modal } from "../UI/modal/modal"
import { GoBellFill } from "react-icons/go"
import Image from "next/image"
import { UserModel } from "@/types"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { SearchInput } from "../searchInput/searchInput"
import { useSidebar } from "@/hooks/useSidebar"
import { getAxiosInstance } from "@/helpers/getAxiosInstance"
import { UploadFileForm } from "../uploadFileForm/uploadFileForm"

export const Topbar = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const session = useSession()
  const { isSidebarHidden } = useSidebar()

  const data = session.data?.user as { token: string, user: UserModel }
  const user = data?.user
  const userAvatarUrl = user?.avatar || "/user.png"

  const handleClick = async () => {
    const axiosInstance = await getAxiosInstance()
    if (axiosInstance !== null) {
      const res = await axiosInstance.get('/users')
      console.log(res.data)

    }

    return null

  }

  return (
    <div className={cl.container}>
      <div className={cl.searchWrapper}>
        <SearchInput />
      </div>

      <div style={{ display: "flex", alignItems: "center", height: "100%", }}>
        <div className={cl.themeToggler}>
          <ThemeToggler />
        </div>

        {/* TODO: notifications */}
        <button onClick={handleClick} className={cl.notifications}>
          <GoBellFill size="25px" />
        </button>

        {/* TODO: uploading form */}
        <Button onClick={() => setIsModalActive(true)} style={{ borderRadius: 30, display: "flex", alignItems: "center", marginRight: 20 }}>
          <IoMdCloudDownload className={cl.uploadIcon} />
          Upload
        </Button>

        {/* TODO: user menu */}
        <div className={cl.user}>
          <Image alt="avatar" src={userAvatarUrl} height={30} width={30} className={cl.userAvatar} />
          <Link href="api/auth/signout" className={cl.userButton}>
            <span className={cl.userName}>{user?.name}</span>
            <FaAngleDown className={cl.userButtonIcon} size="15px" />
          </Link>
        </div>

        <UploadFileForm isActive={isModalActive} setIsActive={setIsModalActive}></UploadFileForm>
      </div>

    </div>
  )
} 
