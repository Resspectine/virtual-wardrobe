import { useHistory } from 'react-router';

export const useRoot = () => {
  const history = useHistory();

  return {
    history,
  };
};
