import { UserModel } from '@/types'
import { create } from 'zustand'

interface State {
  user: UserModel | null
  login: (user: UserModel) => void
  logout: () => void
}

export const useStore = create<State>()((set) => ({
  user: null,
  login: (user: UserModel) => set({ user: user }),
  logout: () => set({ user: null })
}))


