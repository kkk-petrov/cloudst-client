import { Dispatch, SetStateAction, useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import cl from "./UserMenu.module.scss"
import { MdAccountCircle } from "react-icons/md"
import { Link } from "react-router-dom"

interface Props {
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

export const UserMenu = ({ isOpened, setIsOpened }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = () => {
    setIsOpened(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref} className={`${cl.container} ${isOpened && cl.active}`}>
      <ul className={cl.list}>
        <li className={cl.listItem}>
          <MdAccountCircle className={cl.listItemIcon} />
          <Link className={cl.listItemLink} to="#">
            Account
          </Link>
        </li>
        <li className={cl.listItem}>
          <MdAccountCircle className={cl.listItemIcon} />
          <Link className={cl.listItemLink} to="#">
            Logout
          </Link>
        </li>
        <li className={cl.listItem}>
          <MdAccountCircle className={cl.listItemIcon} />
          <Link className={cl.listItemLink} to="#">
            Premium
          </Link>
        </li>
      </ul>
    </div>
  )
}
