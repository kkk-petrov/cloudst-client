import { FaAngleDown } from "react-icons/fa"
import cl from "./Topbar.module.scss"
import { Button } from "../UI/Button/Button"
import { IoMdCloudDownload } from "react-icons/io"
import ThemeToggler from "../ThemeToggler/ThemeToggler"
import { GoBellFill } from "react-icons/go"
import { UserModel } from "@/types"
import { SearchInput } from "../Search/Search"
import { doRequest } from "@/api/doRequest"
import { useDrag } from "@/hooks/useDrag"
import { Link } from "react-router-dom"

export const Topbar = () => {
  const { setIsActive } = useDrag()
  // const session = useSession()

  const data = session.data?.user as { token: string, user: UserModel }
  const user = data?.user
  const userAvatarUrl = user?.avatar || "/user.png"

  const handleClick = async () => {
    const res = await doRequest("GET", '/users')
    console.log(res)
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
        <Button onClick={() => setIsActive(true)} style={{ borderRadius: 30, display: "flex", alignItems: "center", marginRight: 20 }}>
          <IoMdCloudDownload className={cl.uploadIcon} />
          Upload
        </Button>

        {/* TODO: user menu */}
        <div className={cl.user}>
          <img alt="avatar" src={userAvatarUrl} height={30} width={30} className={cl.userAvatar} />
          <Link to="api/auth/signout" className={cl.userButton}>
            <span className={cl.userName}>{user?.name}</span>
            <FaAngleDown className={cl.userButtonIcon} size="15px" />
          </Link>
        </div>

        {/* <UploadFileForm isActive={isModalActive} setIsActive={setIsModalActive}></UploadFileForm> */}
      </div>

    </div>
  )
} 
