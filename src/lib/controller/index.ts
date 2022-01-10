export const appFetch: (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response> = async (
  input,
  init
) => {
  const headers = new Headers(init?.headers);

  headers.append('Content-Type', 'application/json');

  const request = await fetch(`http://localhost:3000/api/${input}`, {
    ...init,
    headers,
    credentials: 'include',
  });

  if (request.status === 401) {
    throw new Error('Unauthorized');
  }

  return request;
};
