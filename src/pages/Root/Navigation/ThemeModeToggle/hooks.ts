import { useAppState } from 'store/appState';

export const useThemeModeToggleControl = () => {
  const changeThemeMode = useAppState(state => state.toggleThemeMode);

  return { onToggleButtonClick: changeThemeMode };
};
