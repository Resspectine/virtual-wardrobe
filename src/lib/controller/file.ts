export const fileFetch: (file: Blob) => Promise<Response> = async file => {
  const formData = new FormData();

  formData.append('file', file);

  const request = await fetch('http://localhost:3000/api/files/upload', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });

  if (request.status === 401) {
    throw new Error('Unauthorized');
  }

  return request;
};
