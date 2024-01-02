"use client"

import '@/styles/globals.scss'
import cl from './dashboard.module.scss'
import { Wrapper } from '@/components/UI/wrapper/wrapper'
import { PinnedFiles } from '@/components/pinnedFiles/pinnedFiles'
import { TypeFilter } from '@/components/typeFilter/typeFilter'
import { StorageProgress } from '@/components/storageProgress/storageProgress'
import { files } from '@/dummy'
import { FileTable } from '@/components/fileTable/fileTable'


export default function Home() {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <TypeFilter />
        <PinnedFiles />
        <StorageProgress />
      </div>
      <FileTable title="Recent Files" files={files} />
    </div >

  )

}
