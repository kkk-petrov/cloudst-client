
import '@/styles/globals.scss'
import { files } from '@/dummy.ts'
import cl from './Dashboard.module.scss'
import { TypeTile } from '@/components/TypeTile/TypeTile'
import { SettingsTile } from '@/components/SettingsTile/SettingsTile'
import { PinnedTile } from '@/components/PinnedTile/PinnedTile'
import { StorageTile } from '@/components/StorageTile/StorageTile'
import { TableTile } from '@/components/TableTile/TableTile'

export const Dashboard = () => {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <TypeTile />
        <PinnedTile />
        <StorageTile />
        <SettingsTile />
      </div>
      <TableTile title="Recent Files" files={files} />
    </div>
  )
}
