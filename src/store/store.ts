import { authService } from '@/services';
import { UserID } from '@/types';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  userId: UserID | null;
  isLoading: boolean
  actions: AuthActions
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null,
  userId: parseInt(localStorage.getItem('userId')!) || null,
  isLoading: false,
  actions: {
    login: async (email: string, password: string) => {
      set({ isLoading: true })
      const data = await authService.login({ email: email, password: password })

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id.toString());

      set({ isLoading: false, token: data.token, userId: data.user.id });
    },
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      set({ token: null, userId: null });
    },
  }
}));
