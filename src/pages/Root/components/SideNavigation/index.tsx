import Box from '@material-ui/core/Box';
import omit from 'lodash/omit';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

import { camelToSentenceCase } from 'lib/helpers/textTransformations';
import { KEYS_TO_OMIT, ROUTE_PATHS, TypesToOmit } from 'routes/constants';

const routes = omit(ROUTE_PATHS, KEYS_TO_OMIT) as Omit<typeof ROUTE_PATHS, TypesToOmit>;

const SideNavigation: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sideNavigationWrapper}>
      {Object.entries(routes).map(([linkName, link], index) => (
        <Box key={index} className={classes.linkWrapper}>
          <Link className={classes.link} to={link}>
            {camelToSentenceCase(linkName)}
          </Link>
          <Box className={classes.separator} />
        </Box>
      ))}
    </Box>
  );
};

export default SideNavigation;
