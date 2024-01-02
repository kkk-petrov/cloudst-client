export interface UserModel {
  id: number
  email: string
  name: string
  password: string
  avatar: string
  isAdmin: boolean
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
  ownerId?: number
  createdAt:string 
}

export interface FolderModel {
  id: number
  files: FileModel[]
  name: string
  ownerId: number
  createdAt: Date
}
