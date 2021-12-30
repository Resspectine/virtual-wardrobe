import { useStore } from 'store';

export const useThemeModeToggleControl = () => {
  const changeThemeMode = useStore(state => state.toggleThemeMode);

  return { onToggleButtonClick: changeThemeMode };
};
