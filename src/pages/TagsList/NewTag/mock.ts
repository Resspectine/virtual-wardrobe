import { ITag } from 'types/tag';

export const createNewTag = async (tag: Omit<ITag, 'id'>): Promise<void> => {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');

  (
    await fetch('http://localhost:3000/api/tag', {
      method: 'POST',
      body: JSON.stringify(tag),
      headers,
    })
  ).json();
};
