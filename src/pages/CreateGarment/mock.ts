import { v4 } from 'uuid';

import { createTag, getGarment, setGarment, updateGarment } from 'localStorage';
import { IGarment } from 'types/garment';

const validateGarment = (garment: IGarment): boolean => !!garment.description && !!garment.price && !!garment.title;

export const createGarment = (garment: IGarment): Promise<void> => {
  if (!validateGarment(garment)) {
    return new Promise((_, reject) => reject());
  }

  if (garment.tags.some(({ id }) => !id)) {
    garment.tags.filter(({ id }) => !id).forEach(tag => createTag({ ...tag, id: v4() }));
  }

  setGarment(garment);

  return new Promise(resolve => resolve());
};

export const getGarmentById = (garmentId: string): Promise<IGarment | undefined> =>
  new Promise(resolve => resolve(getGarment(garmentId)));

export const editGarment = (garment: IGarment): Promise<void> => {
  updateGarment(garment);

  return new Promise(resolve => resolve());
};
