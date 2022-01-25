import { appFetch } from 'lib/controller';
import { User } from 'types/user';

export type RegisterUser = Pick<User, 'email' | 'password' | 'name'>;

const validateUser = (user: RegisterUser): boolean => !!user.email && !!user.password && !!user.name;

export const register = async (user: RegisterUser): Promise<void> => {
  if (!validateUser(user)) {
    return new Promise((_, reject) => reject());
  }

  return (
    await appFetch('authentication/register', {
      method: 'POST',
      body: user,
    })
  ).json();
};
