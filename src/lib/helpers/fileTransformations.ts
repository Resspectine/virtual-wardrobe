export const toDataURL = (url: string, callback: (result: string) => void): void => {
  const xhr = new XMLHttpRequest();

  xhr.onload = (): void => {
    const reader = new FileReader();

    reader.onloadend = (): void => {
      callback(reader.result?.toString() || '');
    };

    reader.readAsDataURL(xhr.response);
  };

  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};
