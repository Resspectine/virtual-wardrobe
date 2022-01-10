import { appFetch } from 'lib/controller';
import { getGarment } from 'localStorage';
import { IGarment } from 'types/garment';
import { ITag } from 'types/tag';

export type SendRequestGarment = Omit<IGarment, 'id' | 'tags'> & { tags: Omit<ITag, 'id'>[] };

const validateGarment = (garment: SendRequestGarment): boolean =>
  !!garment.description && !!garment.price && !!garment.title;

export const createGarment = async (garment: SendRequestGarment): Promise<void> => {
  if (!validateGarment(garment)) {
    return new Promise((_, reject) => reject());
  }

  return (
    await appFetch('garment', {
      method: 'POST',
      body: JSON.stringify(garment),
    })
  ).json();
};

export const getGarmentById = (garmentId: string): Promise<IGarment | undefined> =>
  new Promise(resolve => resolve(getGarment(garmentId)));

export const editGarment = (): Promise<void> => new Promise(resolve => resolve());
