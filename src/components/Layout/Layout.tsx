// import '@/styles/globals.scss'
import { Outlet } from "react-router";
import { Sidebar } from "../Sidebar/Sidebar";
import { Topbar } from "../Topbar/Topbar";
import cl from "./Layout.module.scss";

export const Layout = () => {
	return (
		<div className={cl.container}>
			<Sidebar />
			<main className={cl.main}>
				<Topbar />
				<Outlet />
			</main>
		</div>
	);
};
