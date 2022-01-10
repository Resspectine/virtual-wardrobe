import { FC } from 'react';

import { useLogoutControl } from './hooks';
import { LogoutButton } from './styled';

const UserLogout: FC = () => {
  const { onClick } = useLogoutControl();

  return <LogoutButton onClick={onClick}>Logout</LogoutButton>;
};

export default UserLogout;
