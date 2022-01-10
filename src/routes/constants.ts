export const ROUTE_PATHS = {
  main: '/main',
  login: '/login',
  createGarment: '/create/garment',
  tagsList: '/tags',
  editGarment: (id = ':id'): string => `/create/garment/${id}`,
  404: '/*',
};

export const KEYS_TO_OMIT = ['editGarment', 404, 'login'] as const;

export type TypesToOmit = typeof KEYS_TO_OMIT[number];
