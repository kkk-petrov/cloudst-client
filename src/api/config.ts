import { ID } from "@/types/common";

export const config = {
  BASE_URL: import.meta.env.VITE_REACT_APP_API_URL,
};

export const endpoints = {
  auth: {
    login: "/login",
    register: "/register",
    refresh: "/refresh",
  },
  users: {
    getAll: "",
    create: "",
    getOne: (id: ID) => `/${id}`,
    getMany: (ids: ID[]) => `/m/${ids}`,
    update: (id: ID) => `/${id}`,
    delete: (id: ID) => `/${id}`,
  },
  files: {
    getAll: "",
    upload: "/upload",
    getStorageInfo: "/storage",
    download: (id: ID) => `/${id}/download`,
    getOne: (id: ID) => `/my/${id}`,
    delete: (id: ID) => `/${id}`,
    update: (id: ID) => `/${id}`,
  },
}
