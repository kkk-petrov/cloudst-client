import { useRef } from 'react'
import cl from "./Search.module.scss"
import { IoIosSearch } from "react-icons/io";

export const SearchInput = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
      <IoIosSearch size={30} className={cl.searchIcon} />
      {/* <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" /> */}
      <button onClick={() => console.log("ctrl+k")} className={cl.searchInput}>Search something</button>
      <div className={cl.searchHint}>
        CTRL+K
      </div>
    </div>
  )
}
