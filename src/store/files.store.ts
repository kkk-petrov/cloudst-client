import { filesService } from "@/services";
import { StorageInfo } from "@/types/api";
import { FileModel } from "@/types/models";
import { create } from "zustand";

interface State {
  files: FileModel[] | null;
  pinned: FileModel[] | null;
  isLoading: boolean;
  storage: StorageInfo | null
  actions: Actions;
}

interface Actions {
  upload: (files: File[]) => Promise<number | null>;
  getAll: () => Promise<void>;
  getStorageInfo: () => Promise<void>;
  getPinned: () => Promise<void>;
  togglePin: (id: number) => Promise<void>;
}

export const useFilesStore = create<State>((set, get) => ({
  files: null,
  storage: null,
  pinned: null,
  isLoading: false,
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
    },
    togglePin: async (id: number) => {
      try {
        set({ isLoading: true });

        const file = await filesService.getOne(id);

        const pinned = await filesService.update(id, { isPinned: !file.isPinned, });
        if (pinned) {
          await get().actions.getPinned()
        }

      } catch (err) {
        console.error(err);
      } finally {
        set({ isLoading: false });
      }
    },
    getPinned: async (limit?: number) => {
      try {
        set({ isLoading: true });

        const pinned = await filesService.getAll({ pinned: true, limit: limit, recent: true });
        if (pinned) {
          set({ pinned });
        }

      } catch (err) {
        console.error(err);
      } finally {
        set({ isLoading: false });
      }
    },
  },
}))
