import { useEffect, useRef, useState } from 'react';

import { FormStatus } from '.';

type SetTimeoutReturnType = ReturnType<typeof setTimeout>;

interface UseFormSubmitStatusControl {
  status: FormStatus;
}

export const useFormSubmitStatusControl = ({ status }: UseFormSubmitStatusControl) => {
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

  return { isVisible };
};
