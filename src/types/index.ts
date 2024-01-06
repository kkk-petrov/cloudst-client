type UserID = number

export interface UserModel {
  id: UserID
  email: string
  name: string
  password: string
  avatar: string
  files: FileModel[]
  folders: FolderModel[]
  createdAt: Date
}

export interface FileModel {
  id: number
  type: string
  originalName: string
  desc: string
  size: number
  folderId?: number
  Folder?: FolderModel
  ownerId?: UserID
  createdAt: string
  sharedWith?: UserID[]
}

export interface FolderModel {
  id: number
  files: FileModel[]
  name: string
  ownerId: UserID
  createdAt: Date
}

export interface LoginData {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  avatar?: string
}
