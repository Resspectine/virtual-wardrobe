/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';

export interface IHoldClickProps {
  onMouseUp: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const useHoldClick = <T extends (...args: any[]) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void>(
  callback: T,
  timeout: number
): ((...args: Parameters<T>) => IHoldClickProps) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const millisecondsStart = useRef<number | null>(null);

  const onMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>, ...args: any): void => {
    event.persist();
    millisecondsStart.current = Date.now();

    intervalRef.current = setInterval(() => {
      if (millisecondsStart.current && Date.now() >= millisecondsStart.current + timeout) {
        callback(...args)(event);

        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 10);
  };

  const onMouseUp = (): void => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const hold = (...args: Parameters<T>): IHoldClickProps => ({
    onMouseUp,
    onMouseDown: (event): void => onMouseDown(event, ...args),
  });

  return hold;
};
