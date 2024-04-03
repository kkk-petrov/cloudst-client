import cl from './SettingsTile.module.scss'
import { Wrapper } from '../UI/Wrapper/Wrapper'
import { SlOptions } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { Tile } from '../UI/Tile/Tile';

export const SettingsTile = () => {
  const navigate = useNavigate()

  return (
    <Tile>
      <div className={cl.settings} >
        {/* <FaGear className={cl.icon} size={100} /> */}
        <SlOptions onClick={() => navigate("/shared")} className={cl.icon} size={70} />
      </div>
    </Tile>
  )
}
