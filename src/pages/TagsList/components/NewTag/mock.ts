import { createTag } from 'localStorage';
import { ITag } from 'types/tag';

export const createNewTag = (tag: ITag): Promise<void> => {
  createTag(tag);

  return Promise.resolve();
};
