import type { ID } from "./common";

export interface UserModel {
	id: ID;
	email: string;
	name: string;
	password: string;
	avatar: string;
	files: ID[] | null;
	folders: ID[] | null;
	createdAt: Date;
}

export interface FileModel {
	id: ID;
	type: string;
	originalName: string;
	desc: string;
	size: number;
	folderId?: ID;
	ownerId?: ID;
	createdAt?: string;
	updatedAt: string;
	sharedWith?: ID[];
}

export interface FolderModel {
	id: ID;
	files: ID[] | null;
	name: string;
	ownerId: ID;
	createdAt: Date;
}
