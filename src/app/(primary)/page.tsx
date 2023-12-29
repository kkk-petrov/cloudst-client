"use client"

import '@/styles/globals.scss'
import cl from './dashboard.module.scss'
import { Wrapper } from '@/components/UI/wrapper/wrapper'
import { FaImage, FaMusic } from "react-icons/fa"
import { FaFileLines, FaVideo } from "react-icons/fa6"
import { TiPin } from "react-icons/ti";


export default function Home() {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <Wrapper>
          <ul className={cl.typeList}>

            <li className={cl.typeListItem}>
              <FaImage className={cl.icon} id={cl.image} />
              <div className={cl.typeListItemInfo}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  Image
                  <span>145 files</span>
                </div>
                2.3GB
              </div>
            </li>

            <li className={cl.typeListItem} >
              <FaVideo className={cl.icon} id={cl.video} />
              <div className={cl.typeListItemInfo}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  Video
                  <span>145 files</span>
                </div>
                2.3GB
              </div>

            </li>
            <li className={cl.typeListItem}>
              <FaMusic className={cl.icon} id={cl.audio} />
              <div className={cl.typeListItemInfo}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  Audio
                  <span>145 files</span>
                </div>
                2.3GB
              </div>

            </li>
            <li className={cl.typeListItem}>
              <FaFileLines className={cl.icon} id={cl.docs} />
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
        <Wrapper>
          <div className={cl.pinned}>
            <div className={cl.pinnedText}>
              Pinned Files
              <span>See More</span>
            </div>
            <ul className={cl.pinnedList}>
              <li className={cl.pinnedListItem}>
                <FaFileLines className={cl.icon} id={cl.docs} />
                someFile.pdf
                <button>
                  <TiPin className={cl.pin} />
                </button>
              </li>
              <li className={cl.pinnedListItem}></li>
              <li className={cl.pinnedListItem}></li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper style={{ width: "60%" }}>
          Dashboard
        </Wrapper>
      </div>
      <Wrapper>
        Dashboard
      </Wrapper>

      <div>
      </div>
    </div >

  )

}
