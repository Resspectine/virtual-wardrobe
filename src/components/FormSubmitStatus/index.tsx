import Typography from '@mui/material/Typography';
import { FC } from 'react';

import { TEXT_BY_STATUS } from './constants';
import { useFormSubmitStatusControl } from './hooks';
import { FormSubmitStatusWrapper } from './styled';

export type FormStatus = 'error' | 'idle' | 'loading' | 'success';

export interface IFormSubmitStatus {
  status: FormStatus;
}

const FormSubmitStatus: FC<IFormSubmitStatus> = ({ status }) => {
  const { isVisible } = useFormSubmitStatusControl({
    status,
  });

  if (status === 'idle' || !isVisible) {
    return null;
  }

  return (
    <FormSubmitStatusWrapper status={status}>
      <Typography>{TEXT_BY_STATUS[status]}</Typography>
    </FormSubmitStatusWrapper>
  );
};

export default FormSubmitStatus;
