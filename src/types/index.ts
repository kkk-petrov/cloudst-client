import { ChangeEvent, Dispatch, MouseEvent, MutableRefObject, SetStateAction } from "react"

export type UserID = number
export type FileID = number
export type FolderID = number

export interface UserModel {
  id: UserID
  email: string
  name: string
  password: string
  avatar: string
  files: FileID[] | null
  folders: FolderID[] | null
  createdAt: Date
}

export interface FileModel {
  id: FileID
  type: string
  originalName: string
  desc: string
  size: number
  folderId?: FolderID
  ownerId?: UserID
  createdAt?: string
  updatedAt: string
  sharedWith?: UserID[]
}

export interface FolderModel {
  id: FolderID
  files: FileID[] | null
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

