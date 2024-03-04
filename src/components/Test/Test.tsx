import { ReactNode } from "react";
import cl from "./Test.module.scss";

interface Props {
	children: ReactNode;
}

export const Test = ({ children }: Props) => {
	<div className={cl.container}></div>;
};
