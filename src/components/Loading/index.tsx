import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { SxProps, Theme } from '@mui/system';
import { FC } from 'react';

interface ILoadingProps {
  sxs?: { root?: SxProps<Theme>; icon?: SxProps<Theme> };
}

interface ILoadingWithShadowProps {
  loading: boolean;
  sxs?: { root?: SxProps<Theme>; loadingShadow?: SxProps<Theme> };
}

const Loading: FC<ILoadingProps> = ({ sxs }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sxs?.root,
    }}
  >
    <CircularProgress
      sx={{
        ...sxs?.icon,
      }}
    />
  </Box>
);

export const LoadingWithShadow: FC<ILoadingWithShadowProps> = ({ children, loading, sxs }) => (
  <Box
    position="relative"
    sx={{
      ...sxs?.root,
    }}
  >
    {loading && (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          right: 0,
          bottom: 0,
          backgroundColor: '#76767614',
          borderRadius: '10px',
          ...sxs?.loadingShadow,
        }}
      >
        <Loading
          sxs={{
            icon: {
              top: 80,
              position: 'absolute',
            },
          }}
        />
      </Box>
    )}
    {children}
  </Box>
);

export default Loading;
