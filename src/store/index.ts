import create, { GetState, SetState, StoreApi } from 'zustand';
import { persist } from 'zustand/middleware';

import { Mode, newThemeMode } from 'material-ui-theme';

interface Store {
  themeMode: Mode;
  toggleThemeMode: () => void;
}

export const useStore = create(
  persist<Store, SetState<Store>, GetState<Store>, StoreApi<Store>>(
    set => ({
      themeMode: 'green',
      toggleThemeMode: (): void => set(oldState => ({ themeMode: newThemeMode[oldState.themeMode] })),
    }),
    {
      name: 'app-configuration',
    }
  )
);
