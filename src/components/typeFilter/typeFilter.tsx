import React from 'react'
import cl from './typeFilter.module.scss'
import { Wrapper } from '../UI/wrapper/wrapper'
import { TypeCard } from '../typeCard/typeCard'

export const TypeFilter = () => {
  return (
    <Wrapper>
      <ul className={cl.typeList}>
        <TypeCard type="image">
          Image
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
