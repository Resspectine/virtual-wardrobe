export const camelToSentenceCase = (text: string): string => {
  const result = text.replace(/([A-Z])/g, ' $1');

  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const sleep = (timeout: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), timeout));
