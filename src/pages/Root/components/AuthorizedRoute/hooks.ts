import { useDispatch, useStore } from 'react-redux';

export const useAuthorizedRoute = () => {
  const store = useStore();
  const dispatch = useDispatch();

  return { store, dispatch };
};
