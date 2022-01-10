import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';
import { LoginForm, LoginSubmit, LoginTextField } from './styled';

import FormSubmitStatus from 'components/FormSubmitStatus';

const Login: FC = () => {
  const { status, control, onSubmit } = useCreateClothes();

  return (
    <Box>
      <Typography>Log in</Typography>
      <LoginForm component="form" onSubmit={onSubmit}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <LoginTextField {...props} key={index} />
        ))}
        <FormSubmitStatus status={status} />
        <LoginSubmit type="submit" variant="contained" color="primary">
          Submit
        </LoginSubmit>
      </LoginForm>
    </Box>
  );
};

export default Login;
