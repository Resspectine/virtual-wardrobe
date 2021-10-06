import { createStyles, makeStyles } from '@material-ui/core';

import {
  commonColors,
  fontWeight,
  leftNavigationWidth,
  leftNavigationCollapsedWidth,
  inputWidth,
  inputHeight,
  BREAK_POINTS,
} from 'material-ui-theme';

const headerBadgeSize = 24;
const toggleUserMenuButtonSize = 48;

export const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      backgroundColor: commonColors.backgroundGray,
      boxShadow: 'none',
      color: commonColors.mainBlack,
      transition: 'margin-top 0.2s',
    },
    sidebarExpanded: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${leftNavigationWidth}px)`,
      },
    },
    sidebarCollapsed: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${leftNavigationCollapsedWidth}px)`,
      },
    },
    toolBar: {
      padding: 0,
      minHeight: 70,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(1.25),
      },
    },
    headerAddArrow: {
      fontSize: 22,
      position: 'absolute',
      right: 11,
    },
    headerBadge: {
      '& .MuiBadge-badge': {
        minWidth: 17,
        width: headerBadgeSize,
        height: headerBadgeSize,
        fontSize: 14,
        fontWeight: fontWeight.bold,
        top: -4,
        right: 1,
        borderRadius: '50%',
        padding: '0 4px',
      },
    },
    boxIndent: {
      flex: '1 1 auto',
    },
    svgIcon: {
      stroke: commonColors.blackButton,
      fontSize: 21,
      width: 20,
    },
    menuRoot: {
      maxWidth: 82,
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        maxWidth: 68,
      },
    },
    menuItem: {
      width: 160,
      '&.MuiListItem-button': {
        paddingLeft: 40,
        color: commonColors.blackButton,
        '&:hover': {
          color: commonColors.mainBlack,
        },
      },
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: commonColors.backgroundGray,
      },
      '& .MuiTypography-root': {
        paddingLeft: 0,
        fontWeight: fontWeight.regular,
      },
    },
    divider: {
      backgroundColor: commonColors.grayHover,
      margin: '8px 0',
    },
    toggleButton: {
      marginLeft: 25,
      padding: 0,
      borderRadius: '50%',
    },
    toggleUserMenuItemLink: {
      '&.rightMenuLink': {
        padding: '10px 0',
      },
    },
    toggleUserMenuButton: {
      height: toggleUserMenuButtonSize,
      marginLeft: 22,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.MuiButton-root': {
        width: toggleUserMenuButtonSize,
        height: toggleUserMenuButtonSize,
        borderRadius: '50%',
        padding: 0,
      },
      [theme.breakpoints.down('md')]: {
        margin: 0,
        marginLeft: 20,
      },
    },
    searchSize: {
      width: inputWidth.small,
      height: inputHeight.medium,
      [theme.breakpoints.down(BREAK_POINTS.SMALL)]: {
        width: '100%',
      },
    },
    search: {
      marginRight: 30,
      [theme.breakpoints.down(BREAK_POINTS.SMALL)]: {
        marginRight: 46,
        width: 0,
        height: 0,
      },
    },
    newRequest: {
      borderRadius: 8,
      padding: '9px 13px',
      fontSize: 16,
      lineHeight: '20px',
    },
    plusIcon: {
      '&.MuiSvgIcon-root': {
        height: 14,
        width: 14,
        [theme.breakpoints.up('lg')]: {
          marginRight: 10,
        },
      },
    },
    fullScreen: {
      marginTop: -70,
    },
  })
);
