import { appFetch } from 'lib/controller';
import { IGarment } from 'types/garment';
import { ITag } from 'types/tag';

export type CreateRequestGarment = Omit<IGarment, 'id' | 'tags'> & { tags: Omit<ITag, 'id'>[] };

export type UpdateRequestGarment = Omit<IGarment, 'tags'> & { tags: (Omit<ITag, 'id'> & { id?: string })[] };

const validateGarment = (garment: CreateRequestGarment): boolean =>
  !!garment.description && !!garment.price && !!garment.title;

export const createGarment = async (garment: CreateRequestGarment): Promise<void> => {
  if (!validateGarment(garment)) {
    return new Promise((_, reject) => reject());
  }

  return (
    await appFetch('garment', {
      method: 'POST',
      body: garment,
    })
  ).json();
};

export const getGarmentById = async (id: string | undefined): Promise<IGarment | void> => {
  if (!id) {
    return;
  }

  return (
    await appFetch(`garment/${id}`, {
      method: 'GET',
    })
  ).json();
};

export const editGarment = async (garment: Partial<UpdateRequestGarment>): Promise<void> => {
  await appFetch(`garment/${garment.id}`, {
    body: garment,
    method: 'PATCH',
  });
};
