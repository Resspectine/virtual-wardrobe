import { useSetRecoilState } from 'recoil';

import { newThemeMode } from 'material-ui-theme';
import { themeModeState } from 'material-ui-theme/provider';

export const useThemeModeToggleControl = () => {
  const changeThemeMode = useSetRecoilState(themeModeState);

  return { onToggleButtonClick: (): void => changeThemeMode(oldMode => newThemeMode[oldMode]) };
};
