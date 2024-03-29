import "@/styles/globals.scss";
import cl from "./Dashboard.module.scss";
import { TypeTile } from "@/components/TypeTile/TypeTile";
import { SettingsTile } from "@/components/SettingsTile/SettingsTile";
import { PinnedTile } from "@/components/PinnedTile/PinnedTile";
import { StorageTile } from "@/components/StorageTile/StorageTile";
import { TableTile } from "@/components/TableTile/TableTile";
import { useEffect, useState } from "react";
import { filesService } from "@/services";
import type { FilesResponse } from "@/types/api";

export const Dashboard = () => {
	const [files, setFiles] = useState<FilesResponse>([]);

	const fetchFiles = async () => {
		const fetchedFiles = await filesService.getAll();
		setFiles(fetchedFiles);
	};

	useEffect(() => {
		fetchFiles();
	}, []);

	return (
		<div className={cl.container}>
			<div className={cl.wrapper}>
				<TypeTile />
				<PinnedTile />
				<StorageTile />
				<SettingsTile />
			</div>
			<TableTile title="Recent Files" files={files} limit={6} />
		</div>
	);
};
