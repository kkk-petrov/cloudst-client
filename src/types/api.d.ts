import type { FileModel, FolderModel, UserModel } from "./models";

export interface ApiRequestData extends unknown {}
export interface ApiResponse<T> extends AxiosResponse<T> {
	data: T;
}

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

export type AuthRequest = ApiRequestData & (RegisterData | LoginData);

export interface UpdateUserData extends Partial<UserModel> {}
export type UsersRequest = ApiRequestData & UpdateUserData;

export interface UploadFilesData extends FormData {}
export type FilesRequest = ApiRequestData & UpdateFilesData;

export interface FoldersRequest extends ApiRequestData {}

export interface AuthResponse {
	user: UserModel;
	token: string;
}
