import { IUser } from '@/models';
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface IState {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  logOut: () => void;
}

export const useAuthStore = create<IState>()((set) => ({
  isLoading: true,
  user: null,
  isAuth: false,
  setIsLoading: (value) => set({ isLoading: value }),
  setIsAuth: (value) => set({ isAuth: value }),
  setUser: (user) => set({ user, isLoading: false }),
  logOut: () => {
    Cookies.remove('authToken');
    localStorage.removeItem('authToken');
    set({ user: null, isAuth: false });
  },
}));
