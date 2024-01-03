import React from 'react'
import cl from './pinnedFiles.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { FileIcon } from '../fileIcon/fileIcon'
import { TiPin } from 'react-icons/ti'
import { Navigate } from '../UI/navigate/navigate'

export const PinnedFiles = () => {
  const iconSize = 35

  return (
    <Wrapper>
      <div className={cl.pinned}>
        <div className={cl.pinnedText}>
          Pinned Files
          <Navigate to="#">See More</Navigate>
        </div>
        <ul className={cl.pinnedList}>
          <li className={cl.pinnedListItem}>
            <FileIcon type='doc' size={iconSize} />
            someFile.pdf
            <TiPin className={cl.pin} />
          </li>
          <li className={cl.pinnedListItem}>
            <FileIcon type='image' size={iconSize} />
            image.png
            <TiPin className={cl.pin} />
          </li>
          <li className={cl.pinnedListItem}>
            <FileIcon type='audio' size={iconSize} />
            song.mp3
            <TiPin className={cl.pin} />
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
