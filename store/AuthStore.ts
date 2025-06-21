import { IUser } from '@/models';
import { create } from 'zustand';
import Cookies from 'js-cookie';
import { getUser } from '@/shared/api/user/getUser';
import { signIn } from '@/shared/api/user/signIn';
import { signUp } from '@/shared/api/user/signUp';

interface IState {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  logOut: () => void;
  checkAuth: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  registration: (email: string, password: string) => Promise<void>;
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
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const user = await getUser(); // запрос к /user
      set({ user, isAuth: true });
    } catch (error) {
      set({ user: null, isAuth: false });
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const data = await signIn(email, password); // авторизация
      Cookies.set('authToken', data.token);
      localStorage.setItem('authToken', data.token);

      const user = await getUser(); // повторный запрос уже с токеном
      set({ user, isAuth: true });
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  registration: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const data = await signUp(email, password); // авторизация
      Cookies.set('authToken', data.token);
      localStorage.setItem('authToken', data.token);

      const user = await getUser(); // повторный запрос уже с токеном
      set({ user, isAuth: true });
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
