import { Dispatch, SetStateAction, useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
import cl from "./userMenu.module.scss"
import Link from "next/link"
import { MdAccountCircle } from "react-icons/md"

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
          <Link className={cl.listItemLink} href="#">
            Account
          </Link>
        </li>
        <li className={cl.listItem}>
          <MdAccountCircle className={cl.listItemIcon} />
          <Link className={cl.listItemLink} href="#">
            Logout
          </Link>
        </li>
        <li className={cl.listItem}>
          <MdAccountCircle className={cl.listItemIcon} />
          <Link className={cl.listItemLink} href="#">
            Premium
          </Link>
        </li>
      </ul>
    </div>
  )
}
