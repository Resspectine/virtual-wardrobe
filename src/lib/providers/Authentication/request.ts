import { appFetch } from 'lib/controller';
import { StoreUser } from 'store/user';

export const authenticate = async (): Promise<StoreUser | null> =>
  (
    await appFetch('authentication', {
      method: 'GET',
    })
  ).json();
