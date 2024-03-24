import { FaAngleDown } from "react-icons/fa";
import cl from "./Topbar.module.scss";
import { Button } from "../UI/Button/Button";
import { IoMdCloudDownload } from "react-icons/io";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { GoBellFill } from "react-icons/go";
import { SearchInput } from "../Search/Search";
import { useAuthStore } from "@/store/store";
import { useDrag } from "@/context/DragContext";
import { usersService } from "@/services";

export const Topbar = () => {
	const actions = useAuthStore((state) => state.actions);
	const user = useAuthStore((state) => state.user)!;
	const userAvatarUrl = "/user.png";

	const { ...drag } = useDrag();

	const handleClick = async () => {
		const res = await usersService.getAll();
		console.info(res);
	};

	const handleLogout = () => {
		console.info("Logout");
		actions.logout();
	};

	return (
		<div className={cl.container}>
			<div className={cl.searchWrapper}>
				<SearchInput />
			</div>

			<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
				<div className={cl.themeToggler}>
					<ThemeToggler />
				</div>

				{/* TODO: notifications */}
				<button onClick={handleClick} className={cl.notifications}>
					<GoBellFill size="25px" />
				</button>

				{/* TODO: uploading form */}
				<Button
					onClick={() => drag.setIsActive(true)}
					style={{
						borderRadius: 30,
						display: "flex",
						alignItems: "center",
						marginRight: 20,
					}}
				>
					<IoMdCloudDownload className={cl.uploadIcon} />
					Upload
				</Button>

				{/* TODO: user menu */}
				<div className={cl.user}>
					<img
						alt="avatar"
						src={userAvatarUrl}
						height={30}
						width={30}
						className={cl.userAvatar}
					/>
					<button onClick={handleLogout} className={cl.userButton}>
						<span className={cl.userName}>{user?.name}</span>
						<FaAngleDown className={cl.userButtonIcon} size="15px" />
					</button>
				</div>

				{/* <UploadFileForm isActive={isModalActive} setIsActive={setIsModalActive}></UploadFileForm> */}
			</div>
		</div>
	);
};
