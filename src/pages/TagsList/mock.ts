import { deleteTag, getTags } from 'localStorage';
import { ITag } from 'types/tag';

export const loadTags = (): Promise<ITag[]> => Promise.resolve(getTags() || []);

export const removeTag = (tagId: string): Promise<ITag[]> => {
  deleteTag(tagId);

  return Promise.resolve(getTags() || []);
};
