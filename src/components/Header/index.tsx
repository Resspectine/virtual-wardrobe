import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { FC, memo } from 'react';

import { useHeaderControls } from './hooks';
import { useStyles } from './styles';

import { useContentWrapperStyles } from 'styles/ContentWrapperStyles';

const HeaderComponent: FC = () => {
  const classes = useStyles();
  const contentWrapperClasses = useContentWrapperStyles();
  const { handleDrawerToggle } = useHeaderControls();

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar className={clsx(contentWrapperClasses.content, classes.toolBar)}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Box component="div" className={classes.boxIndent} />
      </Toolbar>
    </AppBar>
  );
};

export default memo(HeaderComponent);
