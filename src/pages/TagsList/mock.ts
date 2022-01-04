import { ITag } from 'types/tag';

export const loadTags = async (): Promise<ITag[]> =>
  (
    await fetch('http://localhost:3000/api/tag', {
      method: 'GET',
    })
  ).json();

export const removeTag = async (tagId: string): Promise<ITag[]> =>
  (
    await fetch(`http://localhost:3000/api/tag/${tagId}`, {
      method: 'DELETE',
    })
  ).json();
