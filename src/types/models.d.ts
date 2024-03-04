export interface UserModel {
	id: UserID;
	email: string;
	name: string;
	password: string;
	avatar: string;
	files: FileID[] | null;
	folders: FolderID[] | null;
	createdAt: Date;
}

export interface FileModel {
	id: FileID;
	type: string;
	originalName: string;
	desc: string;
	size: number;
	folderId?: FolderID;
	ownerId?: UserID;
	createdAt?: string;
	updatedAt: string;
	sharedWith?: UserID[];
}

export interface FolderModel {
	id: FolderID;
	files: FileID[] | null;
	name: string;
	ownerId: UserID;
	createdAt: Date;
}
