import { appFetch } from 'lib/controller';
import { ITag } from 'types/tag';

export const createNewTag = async (tag: Omit<ITag, 'id'>): Promise<void> => {
  (
    await appFetch('tag', {
      method: 'POST',
      body: JSON.stringify(tag),
    })
  ).json();
};
