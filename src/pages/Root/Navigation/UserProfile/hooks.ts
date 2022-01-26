import { useState, MouseEventHandler } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router';

import { placeholderImageUrl } from './helpers';

import { appFetch } from 'lib/controller';
import { usePictureLoad } from 'lib/hooks/usePictureLoad';
import { ROUTE_PATHS } from 'routes/constants';
import { useAppState } from 'store/appState';
import { useUser } from 'store/user';

export const useUserProfile = () => {
  const history = useHistory();
  const user = useUser(state => state.user);
  const userProfileUrl = usePictureLoad({ file: user?.avatar });
  const toggleThemeMode = useAppState(state => state.toggleThemeMode);
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const open = !!anchorEl;

  const removeUser = useUser(state => state.removeUser);
  const { mutate: logOutMutate } = useMutation(() => appFetch('authentication/log-out', { method: 'POST' }), {
    onMutate: () => {
      removeUser();
    },
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      text: 'Profile',
      onClick: () => history.push(ROUTE_PATHS.profile),
    },
    {
      text: 'Toggle theme',
      onClick: toggleThemeMode,
    },
    {
      text: 'Logout',
      onClick: () => logOutMutate(),
    },
  ];

  return {
    open,
    anchorEl,
    menuItems,
    handleClick,
    handleClose,
    userProfileUrl: userProfileUrl || placeholderImageUrl,
  };
};
