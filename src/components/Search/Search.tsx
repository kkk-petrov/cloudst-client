import { useRef } from 'react'
import cl from "./Search.module.scss"
import { VscSettings } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
      <BsSearch size={25} className={cl.searchIcon} />
      <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" />
      <VscSettings size={25} className={cl.searchFilter} />
    </div>
  )
}
