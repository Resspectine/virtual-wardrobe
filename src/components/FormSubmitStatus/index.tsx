import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SystemStyleObject } from '@mui/system';
import React, { FC, useEffect, useRef, useState } from 'react';

import { TEXT_BY_STATUS } from './constants';
import { styles } from './styles';

type SetTimeoutReturnType = ReturnType<typeof setTimeout>;

export interface IFormSubmitStatus {
  status: 'error' | 'idle' | 'loading' | 'success';
}

const FormSubmitStatus: FC<IFormSubmitStatus> = ({ status }) => {
  const timeoutRef = useRef<SetTimeoutReturnType>();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (status !== 'idle') {
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }

    return (): void => {
      clearTimeout(timeoutRef.current as SetTimeoutReturnType);
    };
  }, [status]);

  if (status === 'idle' || !isVisible) {
    return null;
  }

  return (
    <Box
      sx={(theme): SystemStyleObject => ({
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        ...styles(theme)[status],
      })}
    >
      <Typography>{TEXT_BY_STATUS[status]}</Typography>
    </Box>
  );
};

export default FormSubmitStatus;
