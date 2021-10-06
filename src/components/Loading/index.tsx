import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React, { FC } from 'react';

import { useStyles } from './styles';

interface ILoadingProps {
  className?: string;
  classes?: { root?: string; icon?: string };
}

interface ILoadingWithShadowProps {
  loading: boolean;
  className?: string;
  classes?: { root?: string; loadingShadow?: string };
}

const Loading: FC<ILoadingProps> = ({ className, classes }) => {
  const localClasses = useStyles();

  return (
    <div className={clsx(localClasses.loadingWrapper, className, classes?.root)}>
      <CircularProgress className={clsx(classes?.icon)} />
    </div>
  );
};

export const LoadingWithShadow: FC<ILoadingWithShadowProps> = ({ children, loading, className, classes }) => {
  const localClasses = useStyles();

  return (
    <Box position="relative" className={clsx(className, classes?.root)}>
      {loading && (
        <Box className={clsx(localClasses.loadingShadow, classes?.loadingShadow)}>
          <Loading classes={{ icon: localClasses.shadowLoadingPosition }} />
        </Box>
      )}
      {children}
    </Box>
  );
};

export default Loading;
