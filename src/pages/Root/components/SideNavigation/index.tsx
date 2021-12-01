import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import omit from 'lodash/omit';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { camelToSentenceCase } from 'lib/helpers/textTransformations';
import { KEYS_TO_OMIT, ROUTE_PATHS, TypesToOmit } from 'routes/constants';

const routes = omit(ROUTE_PATHS, KEYS_TO_OMIT) as Omit<typeof ROUTE_PATHS, TypesToOmit>;

const SideNavigation: FC = () => {
  const history = useHistory();

  const goTo = (link: string): void => {
    history.push(link);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        borderRadius: 2.5,
        backgroundColor: (theme: Theme) => theme.palette.background.paper,
        marginTop: 3.75,
        marginRight: 1.875,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {Object.entries(routes).map(([linkName, link], index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 1.25,
            '&:last-child': {
              marginBottom: 0,
            },
          }}
          onClick={(): void => goTo(link)}
        >
          <Typography
            sx={{
              textDecoration: 'none',
              color: (theme: Theme) => theme.palette.text.primary,
              fontSize: 18,
              cursor: 'pointer',
            }}
          >
            {camelToSentenceCase(linkName)}
          </Typography>
          <Box
            sx={{
              height: 2,
              width: '100%',
              backgroundColor: (theme: Theme) => theme.palette.background.default,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SideNavigation;
