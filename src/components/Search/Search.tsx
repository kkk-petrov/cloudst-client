import { useRef } from 'react'
import cl from "./Search.module.scss"
import { IoIosSearch } from "react-icons/io";
import { Button } from '../UI/Button/Button';

export const SearchInput = () => {
  const searchRef = useRef<null | HTMLInputElement>(null);
  return (
    <div className={`${cl.search} ${searchRef.current?.classList.contains('active') ? 'active' : ''}`}>
      <span>
        <IoIosSearch size={25} className={cl.searchIcon} />
        {/* <input ref={searchRef} className={`${cl.searchInput} active`} placeholder="Search something" type="text" /> */}
        <button onClick={() => console.log("ctrl+k")} className={cl.searchInput}>Search something</button>

      </span>
      <div className={cl.searchHint}>
        CTRL+K
      </div>
    </div>
  )
}

{/* <div className={cl.wrapper}> */ }
{/*   <span className={cl.searchIconWrapper}> */ }
{/*   </span> */ }
{/* </div> */ }
