import { Logo } from "../logo/logo"
import cl from "./loader.module.scss"

export const Loader = () => {
  return (
    <div className={cl.container}>
      {/* <div className={cl.logo}> */}
      {/*   <Logo /> */}
      {/* </div> */}
      <span></span>
    </div>
  )
}
