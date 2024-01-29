import { authService } from '@/services';
import { UserID } from '@/types';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  userId: UserID | null;
  actions: {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token') || null,
  userId: parseInt(localStorage.getItem('userId')!) || null,
  actions: {
    login: async (email: string, password: string) => {
      const data = await authService.login({ email: email, password: password })

      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id.toString());

      set({ token: data.token, userId: data.user.id });
    },
    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      set({ token: null, userId: null });
    },
  }
}));
