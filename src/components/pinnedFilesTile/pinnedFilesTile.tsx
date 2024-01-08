import React from 'react'
import cl from './pinnedFilesTile.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { FileIcon } from '../fileIcon/fileIcon'
import { TiPin } from 'react-icons/ti'
import { Navigate } from '../UI/navigate/navigate'
import { useRouter } from 'next/navigation'

export const PinnedFilesTile = () => {
  const router = useRouter()
  const iconSize = 35
  const id = 1

  const handleClick = (id: number) => {
    router.push("/pinned/" + id)
  }

  return (
    <Wrapper>
      <div className={cl.pinned}>
        <div className={cl.pinnedText}>
          Pinned Files
          <Navigate to="/pinned">See More</Navigate>
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
