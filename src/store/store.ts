import { authService } from '@/services';
import { UserModel } from '@/types';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: UserModel | null
  isLoading: boolean
  actions: AuthActions
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null,
  user: null,
  isLoading: false,
  actions: {
    login: async (email: string, password: string) => {
      set({ isLoading: true })
      const data = await authService.login({ email: email, password: password })

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id.toString());

      set({ isLoading: false, token: data.token, user: data.user });
    },
    logout: () => {
      localStorage.removeItem('token');
      set({ token: null, user: null });
    },
  }
}));
