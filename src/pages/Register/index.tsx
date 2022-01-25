import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useCreateClothes } from './hooks';
import { RegisterForm, RegisterLink, RegisterNavigation, RegisterSubmit, RegisterTextField } from './styled';

import { ROUTE_PATHS } from 'routes/constants';

const Register: FC = () => {
  const { control, onSubmit } = useCreateClothes();

  return (
    <Box>
      <RegisterNavigation>
        <Typography>Register</Typography>
        <Button>
          <RegisterLink to={ROUTE_PATHS.login}>To login page</RegisterLink>
        </Button>
      </RegisterNavigation>
      <RegisterForm component="form" onSubmit={onSubmit}>
        {getFormFieldConfigurations(control).map((props, index) => (
          <RegisterTextField {...props} key={index} />
        ))}
        <RegisterSubmit type="submit" variant="contained" color="primary">
          Submit
        </RegisterSubmit>
      </RegisterForm>
    </Box>
  );
};

export default Register;
