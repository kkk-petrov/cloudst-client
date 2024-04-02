import type { FileModel, FolderModel, UserModel } from "./models";

export interface ApiRequestData { }

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

export interface UpdateUserData extends Partial<UserModel> { }
export type UsersRequest = ApiRequestData & UpdateUserData;

export type UpdateFileData = Partial<FileModel>;
export type UploadFilesData = FormData;
export type FilesRequest = ApiRequestData & (UpdateFilesData | UploadFilesData);

export interface FoldersRequest extends ApiRequestData { }

export interface AuthResponse {
  user: UserModel;
  token: string;
}

type Filetype = "image" | "video" | "audio" | "other";
export interface StorageInfo {
  total: number;
  used: number;
  free: number;
  types?: Record<Filetype, { size: number; count: number }>;
}

export interface FileRequestOpts {
  limit?: number;
  offset?: number;
  recent?: boolean;
  pinned?: boolean;
}
