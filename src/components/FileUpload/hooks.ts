import { useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import { getDataStringFromFile } from 'lib/helpers/files';
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
      getDataStringFromFile(file, setFileUrl);
    }
  }, [file]);

  const onCloseCLick = () => {
    setFileUrl(null);
    setValue(name, []);
  };

  return { fileUrl, onCloseCLick };
};
