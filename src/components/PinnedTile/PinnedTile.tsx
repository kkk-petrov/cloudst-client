import cl from './PinnedTile.module.scss'
import { Wrapper } from '../UI/Wrapper/Wrapper'
import { FileIcon } from '../FileIcon/FileIcon'
import { TiPin } from 'react-icons/ti'
import { Link } from '../UI/Link/Link'
import { useNavigate } from 'react-router-dom'

export const PinnedTile = () => {
  const navigate = useNavigate()
  const iconSize = 35
  const id = 1

  const handleClick = (id: number) => {
    navigate(`/pinned/${id}`)
  }

  return (
    <Wrapper>
      <div className={cl.pinned}>
        <div className={cl.pinnedText}>
          Pinned Files
          <Link to="/pinned">See More</Link>
        </div>
        <ul className={cl.pinnedList}>
          <li className={cl.pinnedListItem} onClick={() => handleClick(id)}>
            <FileIcon type='doc' size={iconSize} />
            someFile.pdf
            <TiPin className={cl.pin} />
          </li>
          <li className={cl.pinnedListItem} onClick={() => handleClick(id)}>
            <FileIcon type='image' size={iconSize} />
            image.png
            <TiPin className={cl.pin} />
          </li>
          <li className={cl.pinnedListItem} onClick={() => handleClick(id)}>
            <FileIcon type='audio' size={iconSize} />
            song.mp3
            <TiPin className={cl.pin} />
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
