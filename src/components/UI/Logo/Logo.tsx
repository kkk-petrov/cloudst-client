import cl from "./Logo.module.scss"
import { FaCloud } from 'react-icons/fa'

interface Props {
  onlyIcon?: boolean

  // TODO: logo size
  // size?: number
}

export const Logo = ({ onlyIcon = false }: Props) => {
  return (
    <div className={cl.logo}>
      <div className={cl.logoIconWrapper}>
        <FaCloud className={cl.logoIcon} size={onlyIcon ? "60px" : "45px"} />
      </div>
      {!onlyIcon && <div className={cl.text}>Sky Vault</div>}
    </div>
  )
}
