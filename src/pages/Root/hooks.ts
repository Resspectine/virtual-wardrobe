import { useEffect } from 'react';
import { useHistory } from 'react-router';

export const useRoot = () => {
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);
};
