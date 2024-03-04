import { authService } from "@/services";
import { UserModel } from "@/types/models";
import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: UserModel | null;
  isLoading: boolean;
  actions: AuthActions;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")!),
  isLoading: false,
  actions: {
    login: async (email: string, password: string) => {
      set({ isLoading: true });
      const { user, token } = await authService.login({ email, password });

      console.log(user);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      set({
        isLoading: false,
        user: JSON.parse(localStorage.getItem("user")!),
        token: token,
      });
    },
    logout: async () => {
      set({ isLoading: true });

      localStorage.removeItem("user");
      localStorage.removeItem("token");

      set({ isLoading: false, user: null, token: null });
    },
  },
}));
