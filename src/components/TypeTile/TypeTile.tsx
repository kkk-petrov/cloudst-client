import cl from './TypeTile.module.scss'
import { Wrapper } from '../UI/Wrapper/Wrapper'
import { TypeCard } from '../TypeCard/TypeCard'

export const TypeTile = () => {
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
