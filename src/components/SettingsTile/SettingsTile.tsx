import cl from './SettingsTile.module.scss'
import { Wrapper } from '../UI/Wrapper/Wrapper'
import { SlOptions } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

export const SettingsTile = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/settings")
  }

  return (
    <Wrapper>
      <div className={cl.settings} onClick={() => handleClick}>
        {/* <FaGear className={cl.icon} size={100} /> */}
        <SlOptions className={cl.icon} size={70} />
      </div>
    </Wrapper>
  )
}
