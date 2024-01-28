import '@/styles/globals.scss'
import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";

export const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <main className="main">
        <Topbar />
        <Outlet />
      </main>
    </div>
  )
}
