import React from 'react'
import cl from './typeFilter.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { FileIcon } from '../fileIcon/fileIcon'

export const TypeFilter = () => {
  return (
    <Wrapper>
      <ul className={cl.typeList}>
        <li className={cl.typeListItem}>
          <FileIcon type='image' />
          <div className={cl.typeListItemInfo}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              Image
              <span>145 files</span>
            </div>
            2.3GB
          </div>
        </li>
        <li className={cl.typeListItem} >
          <FileIcon type='video' />
          <div className={cl.typeListItemInfo}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              Video
              <span>145 files</span>
            </div>
            2.3GB
          </div>
        </li>
        <li className={cl.typeListItem}>
          <FileIcon type='audio' />
          <div className={cl.typeListItemInfo}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              Audio
              <span>145 files</span>
            </div>
            2.3GB
          </div>
        </li>
        <li className={cl.typeListItem}>
          <FileIcon type='doc' />
          <div className={cl.typeListItemInfo}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              Documents
              <span>145 files</span>
            </div>
            2.3GB
          </div>
        </li>
      </ul>
    </Wrapper>
  )
}
