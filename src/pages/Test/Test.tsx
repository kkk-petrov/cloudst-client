import { Loader } from "@/components/UI/Loader/Loader";
import cl from "./Test.module.scss";
import { getUser } from "@/store/store";
import { useEffect } from "react";

export const Test = () => {
	return (
		<div className={cl.container}>
			<Loader />
		</div>
	);
};
