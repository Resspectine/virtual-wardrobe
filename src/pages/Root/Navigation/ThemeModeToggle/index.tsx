import { Tooltip } from '@mui/material';
import { FC } from 'react';

import { useThemeModeToggleControl } from './hooks';
import { ThemeModeToggleButton } from './styled';

const ThemeModeToggle: FC = () => {
  const { onToggleButtonClick } = useThemeModeToggleControl();

  return (
    <Tooltip title="Toggle theme mode">
      <ThemeModeToggleButton onClick={onToggleButtonClick} />
    </Tooltip>
  );
};

export default ThemeModeToggle;
