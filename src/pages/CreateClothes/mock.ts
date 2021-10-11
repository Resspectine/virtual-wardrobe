import { getGarment, setGarment, updateGarment } from 'localStorage';
import { IGarment } from 'types/garment';

const validateGarment = (garment: IGarment): boolean => !!garment.description && !!garment.price && !!garment.title;

export const createGarment = (garment: IGarment): Promise<void> => {
  if (!validateGarment(garment)) {
    return new Promise((_, reject) => reject());
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
