import { BsSearch } from "react-icons/bs";
import cl from "./input.module.scss"
import React, { useRef } from 'react'
import { VscSettings } from "react-icons/vsc";

export const Input = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
      <BsSearch size={25} className={cl.searchIcon} />
      <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" />
      <VscSettings size={25} className={cl.searchFilter} />
    </div>
  )
}
