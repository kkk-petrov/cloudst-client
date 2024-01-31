// import '@/styles/globals.scss'
import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import { useAuthStore } from '@/store/store';
import cl from "./Layout.module.scss"

export const Layout = () => {
  const user = useAuthStore(store => store.user)

  return (
    <div className={cl.container}>
      <Sidebar />
      <main className={cl.main}>
        <Topbar user={user} />
        <Outlet />
      </main>
    </div>
  )
}
