export const ROUTE_PATHS = {
  main: '/main',
  createGarment: '/create/garment',
  editGarment: (id = ':id'): string => `/create/garment/${id}`,
  404: '/*',
};

export const KEYS_TO_OMIT = ['editGarment', 404];

export type TypesToOmit = 'editGarment' | 404;
