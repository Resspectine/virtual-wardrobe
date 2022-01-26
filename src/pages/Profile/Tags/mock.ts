import { appFetch } from 'lib/controller';
import { ITag } from 'types/tag';

export const loadTags = async (): Promise<ITag[]> =>
  (
    await appFetch('tag', {
      method: 'GET',
    })
  ).json();

export const removeTag = async (tagId: string): Promise<ITag[]> =>
  (
    await appFetch(`tag/${tagId}`, {
      method: 'DELETE',
    })
  ).json();
