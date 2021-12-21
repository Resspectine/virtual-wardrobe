import { Box, styled, Theme } from '@mui/material';

import { FormStatus } from '.';

type FormStatusForStyles = Exclude<FormStatus, 'idle'>;

type Styles = {
  backgroundColor: string;
  color: string;
};

export const styles = (theme: Theme): Record<FormStatusForStyles, Styles> => ({
  error: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  loading: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  success: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
});

export const FormSubmitStatusWrapper = styled(Box)<{ status: FormStatusForStyles }>(({ theme, status }) => ({
  padding: '5px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  ...styles(theme)[status],
}));
