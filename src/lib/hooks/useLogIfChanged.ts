import { useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function print(value: any) {
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return value.toString();
}

/**
 * A small only-dev hook that shows which hook was updated at render time
 * @param name Hook name
 * @param value Hook value
 */
export const useLogIfChanged = <T>(name: string, value: T): void => {
  const previous = useRef(value);
  const renderCount = useRef(1);

  if (!Object.is(previous.current, value)) {
    // eslint-disable-next-line no-console
    console.log(
      `${name} changed. Render Count: ${renderCount.current}, Old: ${print(previous.current)}, New: ${print(value)}`
    );
    previous.current = value;
    renderCount.current += 1;
  }
};
