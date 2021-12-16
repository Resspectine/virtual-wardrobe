import { Button, Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import omit from 'lodash/omit';
import { FC } from 'react';
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { camelToSentenceCase } from 'lib/helpers/textTransformations';
import { newThemeMode } from 'material-ui-theme';
import { themeModeState } from 'material-ui-theme/provider';
import { KEYS_TO_OMIT, ROUTE_PATHS, TypesToOmit } from 'routes/constants';

const routes = omit(ROUTE_PATHS, KEYS_TO_OMIT) as Omit<typeof ROUTE_PATHS, TypesToOmit>;

const ThemeModeToggle: FC = () => {
  const changeThemeMode = useSetRecoilState(themeModeState);

  return (
    <Tooltip title="Toggle theme mode">
      <Button
        onClick={(): void => changeThemeMode(oldMode => newThemeMode[oldMode])}
        sx={{
          width: '1rem',
          height: '1rem',
          minWidth: 'unset',
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          '&:hover': {
            backgroundColor: theme => theme.palette.text.secondary,
          },
          backgroundColor: theme => theme.palette.text.secondary,
        }}
      />
    </Tooltip>
  );
};

const Navigation: FC = () => {
  const history = useHistory();
  const location = useLocation();

  const goTo = (link: string): void => {
    history.push(link);
  };

  const isCurrentPage = (route: string): boolean => !!matchPath(location.pathname, route);

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: (theme: Theme) => theme.palette.background.paper,
        display: 'flex',
        gap: 2.5,
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {Object.entries(routes).map(([linkName, link], index) => (
        <Box
          key={index}
          sx={{
            '&:last-child': {
              marginBottom: 0,
            },
          }}
          onClick={(): void => goTo(link)}
        >
          <Typography
            sx={{
              textDecoration: 'none',
              color: (theme: Theme): string =>
                isCurrentPage(link) ? theme.palette.text.secondary : theme.palette.text.primary,
              fontSize: 18,
              cursor: 'pointer',
            }}
          >
            {camelToSentenceCase(linkName)}
          </Typography>
        </Box>
      ))}
      <ThemeModeToggle />
    </Box>
  );
};

export default Navigation;
