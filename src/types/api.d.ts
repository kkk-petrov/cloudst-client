import type { UserID } from "./common";
import type { FileModel, FolderModel, UserModel } from "./models";

export type AuthRequest = RegisterData | LoginData;
export type FilesRequest = UploadFileData | FileID | FileID[] | null;
export type FoldersRequest = FolderID | FolderID[] | null;

export interface AuthResponse {
	user: UserModel;
	token: string;
}
export type UsersRequest = UserID | UserID[] | null;
export type UsersResponse = UserModel | UserModel[] | null;
export type FilesResponse = FileModel | FileModel[] | null;
export type FoldersResponse = FolderModel | FolderModel[] | null;

export interface LoginData {
	email: string;
	password: string;
}
export interface RegisterData {
	email: string;
	password: string;
	name: string;
	avatar?: string;
}
