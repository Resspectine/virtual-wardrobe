import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { getFormFieldConfigurations } from './helpers';
import { useNewTag } from './hooks';

import ControlledTextField from 'components/ControlledTextField';
import FormSubmitStatus from 'components/FormSubmitStatus';

export interface INewTagValues {
  title: string;
}

export interface INewTag {
  closeModal: () => void;
}

const NewTag: FC<INewTag> = ({ closeModal }) => {
  const { status, control, onSubmit } = useNewTag();

  return (
    <Box
      sx={theme => ({
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 2,
      })}
    >
      <Typography>Create clothes</Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {getFormFieldConfigurations(control).map((props, index) => (
          <ControlledTextField
            {...props}
            key={index}
            sx={{
              '&.MuiTextField-root': {
                marginBottom: 1.25,
                width: '100%',
              },
            }}
          />
        ))}
        <FormSubmitStatus status={status} />
        <Box
          sx={{
            marginTop: 1.25,
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <Button onClick={closeModal} variant="outlined">
            Close
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              color: '#fff',
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewTag;
