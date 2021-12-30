import { getGarment } from 'localStorage';
import { IGarment } from 'types/garment';
import { ITag } from 'types/tag';

export type SendRequestGarment = Omit<IGarment, 'id' | 'tags'> & { tags: Omit<ITag, 'id'>[] };

const validateGarment = (garment: SendRequestGarment): boolean =>
  !!garment.description && !!garment.price && !!garment.title;

export const createGarment = async (garment: SendRequestGarment): Promise<void> => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  if (!validateGarment(garment)) {
    return new Promise((_, reject) => reject());
  }

  return (
    await fetch('http://localhost:3000/api/garment', {
      method: 'POST',
      body: JSON.stringify(garment),
      headers,
    })
  ).json();
};

export const getGarmentById = (garmentId: string): Promise<IGarment | undefined> =>
  new Promise(resolve => resolve(getGarment(garmentId)));

export const editGarment = (): Promise<void> =>
  // updateGarment(garment);

  new Promise(resolve => resolve());
