// useUser.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IUser {
  user: User;
  location: string;
}

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string | '';
  phoneNumber: string;
  city: string;
  state: string;
  country: string;
  __v: number;
  createdAt: Date;
  isHost: boolean;
  profession?: string;
  language?: string;
  isVerified: boolean;
  isLicensed: boolean;
};

type UserState = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

export const useUser = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user: IUser | null) => set({ user }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);



  
