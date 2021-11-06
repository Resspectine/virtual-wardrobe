import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import omit from 'lodash/omit';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { useStyles } from './styles';

import { camelToSentenceCase } from 'lib/helpers/textTransformations';
import { KEYS_TO_OMIT, ROUTE_PATHS, TypesToOmit } from 'routes/constants';

const routes = omit(ROUTE_PATHS, KEYS_TO_OMIT) as Omit<typeof ROUTE_PATHS, TypesToOmit>;

const SideNavigation: FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const goTo = (link: string): void => {
    history.push(link);
  };

  return (
    <Box className={classes.sideNavigationWrapper}>
      {Object.entries(routes).map(([linkName, link], index) => (
        <Box key={index} className={classes.linkWrapper} onClick={(): void => goTo(link)}>
          <Typography className={classes.link}>{camelToSentenceCase(linkName)}</Typography>
          <Box className={classes.separator} />
        </Box>
      ))}
    </Box>
  );
};

export default SideNavigation;
