import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';
import { LoginForm, LoginLink, LoginNavigation, LoginSubmit, LoginTextField } from './styled';

import { ROUTE_PATHS } from 'routes/constants';

const Login: FC = () => {
  const { control, onSubmit } = useCreateClothes();

  return (
    <Box>
      <LoginNavigation>
        <Typography>Log in</Typography>
        <Button>
          <LoginLink to={ROUTE_PATHS.register}>To registration page</LoginLink>
        </Button>
      </LoginNavigation>
      <LoginForm component="form" onSubmit={onSubmit}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <LoginTextField {...props} key={index} />
        ))}
        <LoginSubmit type="submit" variant="contained" color="primary">
          Submit
        </LoginSubmit>
      </LoginForm>
    </Box>
  );
};

export default Login;
