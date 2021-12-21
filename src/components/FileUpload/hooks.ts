import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { ICreateClothesValues } from 'pages/CreateGarment';

interface UseFileUploadControl {
  setValue: UseFormSetValue<ICreateClothesValues>;
  name: keyof ICreateClothesValues;
  file: File;
}

export const useFileUploadControl = ({ setValue, name, file }: UseFileUploadControl) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = (): void => {
        setFileUrl(reader.result?.toString() || '');
      };

      reader.readAsDataURL(file);
    }
  }, [file]);

  const onCloseCLick = () => {
    setFileUrl(null);
    setValue(name, []);
  };

  return { fileUrl, onCloseCLick };
};
