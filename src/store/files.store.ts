import { filesService } from "@/services";
import { StorageInfo } from "@/types/api";
import { FileModel } from "@/types/models";
import { create } from "zustand";
import { useAuthStore } from "./auth.store";

const isAuthenticated = useAuthStore.getState().token

interface State {
  files: FileModel[] | null;
  isLoading: boolean;
  storage: StorageInfo
  actions: Actions;
}

interface Actions {
  upload: (files: File[]) => Promise<number | null>;
  getAll: () => Promise<void>;
  getStorageInfo: () => Promise<void>;
}

const init = async () => {
  if (isAuthenticated) {
    const files = await filesService.getAll();
    const storage = await filesService.getStorageInfo();

    return { files, storage }
  }
  return { files: null, storage: { total: 0, used: 0, free: 0 } }
}

const { files, storage } = await init();

export const useFilesStore = create<State>((set, get) => ({
  files: files,
  isLoading: false,
  storage: storage,
  actions: {
    upload: async (files: File[]) => {

      const formData = new FormData();

      for (const file of files) {
        formData.append("file", file, file.name);
      }

      try {
        set({ isLoading: true });

        const res = await filesService.upload(formData);
        await get().actions.getAll()
        console.log("Upload response: ", res);

        return res.status
      } catch (error) {
        console.error("Upload failed:", error);
        return null
      } finally {

        set({ isLoading: false });
      }
    },
    getAll: async () => {
      try {
        set({ isLoading: true });
        const files = await filesService.getAll({ recent: true });
        if (files) {
          set({ files });
          await get().actions.getStorageInfo()
        }
      } catch (err) {
        console.error(err);
      } finally {
        set({ isLoading: false });
      }
    },
    getStorageInfo: async () => {
      try {
        set({ isLoading: true });

        const storage = await filesService.getStorageInfo();
        if (storage) {
          set({ storage });
        }

      } catch (err) {
        console.error(err);
      } finally {
        set({ isLoading: false });
      }
    }
  },
}))
