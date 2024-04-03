import cl from "./Logo.module.scss"
import { FaCloud } from 'react-icons/fa'

interface Props {
  onlyIcon?: boolean

  // TODO: logo size
  // size?: number
}

export const Logo = ({ onlyIcon = false, }: Props) => {
  return (
    <div className={cl.logo}>
      <div className={cl.logoIconWrapper}>
        <FaCloud className={cl.logoIcon} size={45} />
      </div>
      <div className={onlyIcon ? `${cl.text} ${cl.hidden}` : cl.text}>Sky Vault</div>
    </div>
  )
}
