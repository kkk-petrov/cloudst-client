import "@/styles/globals.scss";
import { files } from "@/dummy.ts";
import cl from "./Recent.module.scss";
import { TableTile } from "@/components/TableTile/TableTile";

export const Recent = () => {
	return (
		<div className={cl.container}>
			<TableTile title="Recent Files" files={files} />
		</div>
	);
};
