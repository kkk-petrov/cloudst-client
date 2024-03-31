import { authService, userService } from "@/services";
import type { LoginData, RegisterData } from "@/types/api";
import type { UserModel } from "@/types/models";
import { create } from "zustand";
import { useFilesStore } from "./files.store";

interface State {
  token: string | null;
  user: UserModel | null;
  isLoading: boolean;
  actions: Actions;
}

interface Actions {
  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
}

async function fetchUser() {
  const token = localStorage.getItem("token");
  if (token !== null) {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));

    const userId = decodedToken.id;
    return userService.getOne(userId);
  }

  return null;
}

const user = await fetchUser();

export const useAuthStore = create<State>((set) => ({
  user: user,
  token: localStorage.getItem("token"),
  isLoading: false,
  actions: {
    login: async (data) => {
      try {
        set({ isLoading: true });

        const { email, password } = data;
        console.log(email, password);

        const { user, token } = await authService
          .login({ email, password })

        console.log(token, user);

        localStorage.setItem("token", token);

        set({
          user: user,
          token: token,
        });

        await useFilesStore.getState().actions.getAll()
      } catch (error) {
        console.error(error);
      } finally {
        set({
          isLoading: false,
        });
      }
    },
    register: async (data) => {
      try {
        set({ isLoading: true });

        const { email, password, name, avatar } = data;

        const { token, user } = await authService
          .register({
            email,
            password,
            name,
            avatar,
          })

        localStorage.setItem("token", token);

        set({
          user: user,
          token: token,
        });
      } catch (error) {
        console.error(error);
      } finally {
        set({
          isLoading: false,
        });
      }
    },
    logout: async () => {
      try {
        set({ isLoading: true });

        useFilesStore.setState({ files: [], storage: { total: 0, used: 0, free: 0 } })
        localStorage.removeItem("token");

        set({ token: null, user: null });
      } catch (error) {
        console.error(error);
      } finally {
        set({ isLoading: false });
      }
    },
  },
}));
