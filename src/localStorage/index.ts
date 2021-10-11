import { KEYS } from './constants';

import { IGarment } from 'types/garment';

export const getGarments = (): IGarment[] | null => JSON.parse(localStorage.getItem(KEYS.GARMENT_COLLECTION) || 'null');

export const getGarment = (garmentId: string): IGarment | undefined =>
  getGarments()?.find(({ id }) => id === garmentId);

export const setGarments = (garments: IGarment[]): void =>
  localStorage.setItem(KEYS.GARMENT_COLLECTION, JSON.stringify(garments));

export const setGarment = (garment: IGarment): void => setGarments((getGarments() || []).concat(garment));

export const updateWearingAmount = (garmentId: string): void =>
  setGarments(
    (getGarments() || []).map(garment =>
      garment.id === garmentId ? { ...garment, wearingAmount: garment.wearingAmount + 1 } : garment
    )
  );

export const updateFavoriteStatus = (garmentId: string): void =>
  setGarments(
    (getGarments() || []).map(garment =>
      garment.id === garmentId ? { ...garment, isFavorite: !garment.isFavorite } : garment
    )
  );

export const updateGarment = (newGarment: IGarment): void =>
  setGarments((getGarments() || []).map(garment => (garment.id === newGarment.id ? newGarment : garment)));
