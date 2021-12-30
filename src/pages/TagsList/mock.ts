import { deleteTag, getTags } from 'localStorage';
import { ITag } from 'types/tag';

export const loadTags = async (): Promise<ITag[]> =>
  (
    await fetch('http://localhost:3000/api/tag', {
      method: 'GET',
    })
  ).json();

export const removeTag = (tagId: string): Promise<ITag[]> => {
  deleteTag(tagId);

  return Promise.resolve(getTags() || []);
};
