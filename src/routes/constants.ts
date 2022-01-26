export const ROUTE_PATHS = {
  main: '/main',
  login: '/login',
  register: '/register',
  createGarment: '/create/garment',
  profile: '/profile',
  editGarment: (id = ':id'): string => `/create/garment/${id}`,
  404: '/*',
};

export const KEYS_TO_OMIT = ['editGarment', 404, 'login', 'register', 'profile'] as const;

export type TypesToOmit = typeof KEYS_TO_OMIT[number];
