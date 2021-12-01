import { CssBaseline } from '@mui/material';
import { Theme } from '@mui/system';
import Box from '@mui/system/Box';
import React, { FC } from 'react';
import { Switch } from 'react-router-dom';

import SideNavigation from './components/SideNavigation';
import { renderRoutes } from './helpers';
import { useRoot } from './hooks';

const Root: FC = () => {
  useRoot();

  return (
    <Box
      sx={theme => ({
        [theme.breakpoints.up('xs')]: {
          maxWidth: '100%',
          marginRight: 2.5,
          marginLeft: 2.5,
        },
        [theme.breakpoints.up('sm')]: {
          maxWidth: 560,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        [theme.breakpoints.up('md')]: {
          maxWidth: 720,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: 1160,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        [theme.breakpoints.up('xl')]: {
          maxWidth: 1500,
          marginRight: 'auto',
          marginLeft: 'auto',
        },
        display: 'flex',
        alignItems: 'flex-start',
      })}
    >
      <CssBaseline />
      <SideNavigation />
      <Box
        sx={{
          backgroundColor: (theme: Theme) => theme.palette.background.paper,
          padding: '20px',
          marginTop: 3.75,
          borderRadius: 2.5,
          flex: 1,
        }}
      >
        <Switch>{renderRoutes()}</Switch>
      </Box>
    </Box>
  );
};

export default Root;
