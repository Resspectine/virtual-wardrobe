import config from '../../../config.json';

export const appFetch: (
  input: RequestInfo,
  init?: (Omit<RequestInit, 'body'> & { body?: Record<string, unknown> }) | undefined
) => Promise<Response> = async (input, init) => {
  const headers = new Headers(init?.headers);

  headers.append('Content-Type', 'application/json');

  const request = await fetch(`http://${config.ApiUrl}/api/${input}`, {
    ...init,
    body: JSON.stringify(init?.body || undefined),
    headers,
    credentials: 'include',
  });

  if (request.status === 401 || request.status === 400) {
    throw new Error('Unauthorized');
  }

  if (request.status === 500) {
    throw new Error('Server error');
  }

  return request;
};
