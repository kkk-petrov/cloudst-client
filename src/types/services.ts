import { FileID, FileModel, FolderID, FolderModel, LoginData, RegisterData, UserID, UserModel } from ".";

export type AuthRequest = RegisterData | LoginData
export type UsersRequest = UserID | UserID[] | null
export type FilesRequest = FileID | FileID[] | null
export type FoldersRequest = FolderID | FolderID[] | null

export interface AuthResponse {
  user: UserModel
  token: string
  status: "OK" | "Error"
}
export type UsersResponse = UserModel | UserModel[] | null
export type FilesResponse = FileModel | FileModel[] | null
export type FoldersResponse = FolderModel | FolderModel[] | null

