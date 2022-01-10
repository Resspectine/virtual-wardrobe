import create from 'zustand';

import { User } from 'types/user';

export type StoreUser = Pick<User, 'email' | 'name' | 'id'>;

interface Store {
  user: StoreUser | null | undefined;
  setUser: (user: StoreUser) => void;
  removeUser: () => void;
}

export const useUser = create<Store>(set => ({
  user: undefined,
  setUser: (user): void =>
    set({
      user,
    }),
  removeUser: (): void =>
    set({
      user: null,
    }),
}));
