import { KEYS } from './constants';

import { IGarment } from 'types/garment';
import { ITag } from 'types/tag';

export const getGarments = (): IGarment[] | null => JSON.parse(localStorage.getItem(KEYS.GARMENT_COLLECTION) || 'null');

export const getGarment = (garmentId: string): IGarment | undefined =>
  getGarments()?.find(({ id }) => id === garmentId);

export const setGarments = (garments: IGarment[]): void =>
  localStorage.setItem(KEYS.GARMENT_COLLECTION, JSON.stringify(garments));

export const setGarment = (garment: IGarment): void => setGarments((getGarments() || []).concat(garment));

export const deleteGarment = (garmentId: string): void =>
  setGarments((getGarments() || []).filter(({ id }) => id !== garmentId));

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

// export const updateGarment = (newGarment: IGarment): void =>
//   setGarments((getGarments() || []).map(garment => (garment.id === newGarment.id ? newGarment : garment)));

export const setTags = (tags: ITag[]): void => localStorage.setItem(KEYS.TAGS_COLLECTION, JSON.stringify(tags));

export const getTags = (): ITag[] | null => JSON.parse(localStorage.getItem(KEYS.TAGS_COLLECTION) || 'null');

export const createTag = (tag: ITag): void => setTags((getTags() || []).concat(tag));

export const deleteTag = (tagId: string): void => setTags((getTags() || []).filter(tag => tag.id !== tagId));
