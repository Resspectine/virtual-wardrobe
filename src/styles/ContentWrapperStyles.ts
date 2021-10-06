import { createStyles, makeStyles } from '@material-ui/core';

export const useContentWrapperStyles = makeStyles(theme =>
  createStyles({
    content: {
      flexGrow: 1,
      transition: 'margin 0.2s',
    },
    sidebarExpanded: {
      margin: '0 45px 0 25px',
      width: 'calc(100vw - 270px)',
      [theme.breakpoints.down('md')]: {
        margin: '0 30px 0 20px',
        width: 'calc(100vw - 250px)',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '0 15px 0 15px',
        width: 'calc(100vw - 30px)',
      },
    },
    sidebarCollapsed: {
      margin: '0 45px 0 25px',
      width: 'calc(100vw - 150px)',
      [theme.breakpoints.down('md')]: {
        margin: '0 30px 0 20px',
        width: 'calc(100vw - 130px)',
      },
      [theme.breakpoints.down('xs')]: {
        margin: '0 15px 0 15px',
        width: 'calc(100vw - 30px)',
      },
    },
    fullScreen: {
      margin: '0',
      width: '100vw',
      height: '100vh',
    },
  })
);
