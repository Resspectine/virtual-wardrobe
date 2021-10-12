import { getTags } from 'localStorage';
import { ITag } from 'types/tag';

export const loadTags = (): Promise<ITag[]> => Promise.resolve(getTags() || []);
