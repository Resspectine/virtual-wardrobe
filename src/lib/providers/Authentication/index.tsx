import { FC } from 'react';

import { useAuthentication } from './hooks';

import Loading from 'components/Loading';

export const AuthenticationProvide: FC = ({ children }) => {
  const { isLoading } = useAuthentication();

  if (!children || isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};
