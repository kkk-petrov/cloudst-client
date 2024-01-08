import React from 'react'
import cl from './typeFilterTile.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { TypeCard } from '../typeCard/typeCard'

export const TypeFilterTile = () => {
  return (
    <Wrapper>
      <ul className={cl.typeList}>
        <TypeCard type="image">
          Images
        </TypeCard>
        <TypeCard type="video">
          Video
        </TypeCard>
        <TypeCard type="audio">
          Audio
        </TypeCard>
        <TypeCard type="docs">
          Documents
        </TypeCard>
      </ul>
    </Wrapper>
  )
}
