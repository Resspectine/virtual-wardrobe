import { InputProps } from '@material-ui/core/Input';
import React, { ComponentType, useRef, useEffect, ChangeEvent, useMemo } from 'react';
import { v4 } from 'uuid';

export interface IWithLocalStorageProps {
  localStorageKey: string;
}

export function wrappedWithLocalStorage<P extends InputProps>(WrappedComponent: ComponentType<P>) {
  return (wrappedComponentProps: P & IWithLocalStorageProps): JSX.Element | null => {
    const { localStorageKey, value } = wrappedComponentProps;
    const userBasedKey = `${v4()}.${localStorageKey}`;
    const getValueFromStore = () => localStorage.getItem(userBasedKey) || `${value}` || '';

    const isFirst = useRef(true);

    const propsWithoutLocalStorageKey = useMemo(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { localStorageKey: _, ...rest } = wrappedComponentProps;

      return rest as unknown as P;
    }, [wrappedComponentProps]);

    useEffect(() => {
      if (!isFirst.current) {
        localStorage.setItem(userBasedKey, `${value || ''}`);
      }
    }, [value]);

    useEffect(() => {
      if (isFirst.current) {
        isFirst.current = false;

        if (wrappedComponentProps.onChange) {
          wrappedComponentProps.onChange({
            preventDefault: () => {},
            target: {
              value: getValueFromStore(),
            },
          } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
        }
      }
    }, []);

    return <WrappedComponent {...propsWithoutLocalStorageKey} value={isFirst.current ? getValueFromStore() : value} />;
  };
}
