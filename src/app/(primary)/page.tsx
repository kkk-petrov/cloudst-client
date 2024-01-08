"use client"

import '@/styles/globals.scss'
import cl from './dashboard.module.scss'
import { files } from '@/dummy'
import { FileTable } from '@/components/fileTable/fileTable'
import { TypeFilterTile } from '@/components/typeFilterTile/typeFilterTile'
import { PinnedFilesTile } from '@/components/pinnedFilesTile/pinnedFilesTile'
import { StorageProgressTile } from '@/components/storageProgressTile/storageProgressTile'
import { SettingsTile } from '@/components/settingsTile/settingsTile'

export default function Dashboard() {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <TypeFilterTile />
        <PinnedFilesTile />
        <StorageProgressTile />
        <SettingsTile />
      </div>
      <FileTable title="Recent Files" files={files} />
    </div >
  )
}
