import '@/styles/globals.scss'
import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import { useEffect, useState } from 'react';
import { UserModel } from '@/types';
import { useAuthStore } from '@/store/store';
import { doRequest } from '@/api/doRequest';
import { DragContainer } from '../UploadFiles/DragContainer';

export const Layout = () => {
  const [user, setUser] = useState<UserModel | null>(null)
  const store = useAuthStore(store => store)

  useEffect(() => {
    const fetchUser = async () => {
      const user: UserModel = await doRequest("GET", `/users/${store.userId}`)
      setUser(user)
      console.log(user)
    }

    if (store.token) {
      fetchUser()
    }
  }, [store])

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <main className="main">
        <Topbar user={user} />
        <Outlet />
      </main>
      {/* <DragContainer /> */}
    </div>
  )
}
