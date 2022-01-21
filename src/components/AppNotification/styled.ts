import { Cancel } from '@mui/icons-material';
import { Box, styled } from '@mui/system';

export const AppNotificationRoot = styled(Box)({
  position: 'fixed',
  top: 40,
  left: 20,
  zIndex: 3000,
});

export const AppNotificationMessageWrapper = styled(Box)<{ remove: boolean }>(({ remove }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '5px 10px',
  backgroundColor: '#1976d2',
  border: '2px solid #7fbffe',
  borderRadius: 8,
  color: '#fff',
  maxWidth: 200,
  animation: !remove ? 'enter 300ms cubic-bezier(0.15, 0.7, 0.71, 1.29)' : 'left 500ms linear',
  marginBottom: 10,
  '@keyframes enter': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  '@keyframes left': {
    '0%': { transform: 'translateX(0)', opacity: 1 },
    '100%': { transform: 'translateX(100%)', opacity: 0 },
  },
}));

export const AppNotificationMessageCancel = styled(Cancel)({
  cursor: 'pointer',
  marginLeft: 5,
});
