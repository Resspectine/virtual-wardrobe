import { RouterProps } from 'react-router';
import { combineReducers, Reducer } from 'redux';

// import user from './user/reducer';
// import { IState as UserState, Action as UserAction } from './user/types';

export type StoreActions = any;

export interface IStoreState {
  user: any;
}

export interface IActionOptions {
  onSuccess?: (() => void) | undefined;
  onError?: (() => void) | undefined;
  history?: RouterProps['history'] | undefined;
}

export const appReducer: Reducer<IStoreState> = combineReducers<IStoreState>({
  user: () => ({}),
});

export const rootReducer: Reducer<IStoreState> = (state, action) => appReducer(state, action);

export default rootReducer;
