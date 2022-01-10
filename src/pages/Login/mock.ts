import { appFetch } from 'lib/controller';
import { StoreUser } from 'store/user';
import { User } from 'types/user';

export type LoginUser = Pick<User, 'email' | 'password'>;

const validateUser = (user: LoginUser): boolean => !!user.email && !!user.password;

export const login = async (user: LoginUser): Promise<StoreUser> => {
  if (!validateUser(user)) {
    return new Promise((_, reject) => reject());
  }

  return (
    await appFetch('authentication/log-in', {
      method: 'POST',
      body: JSON.stringify(user),
    })
  ).json();
};
