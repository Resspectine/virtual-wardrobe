import { Button } from '@mui/material';
import { Box, styled } from '@mui/system';

import ControlledTextField, { ControlledTextFieldType } from 'components/ControlledTextField';

export const LoginForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const LoginTextField = styled(ControlledTextField)({
  '&.MuiTextField-root': {
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
  },
}) as ControlledTextFieldType;

export const LoginSubmit = styled(Button)({
  marginTop: 10,
  color: '#fff',
});
