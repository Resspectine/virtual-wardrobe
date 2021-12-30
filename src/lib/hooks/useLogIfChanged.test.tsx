import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import { useLogIfChanged } from './useLogIfChanged';

describe('useLogIfChanged', () => {
  test('useLogIfChanged', async () => {
    const { result, rerender } = renderHook(({ value }) => useLogIfChanged('testValue', value), {
      initialProps: {
        value: '200',
      },
    });

    expect(result.current).toEqual(1);

    rerender({
      value: '23333',
    });

    expect(result.current).toEqual(2);

    rerender({
      value: '23333',
    });

    expect(result.current).toEqual(2);

    rerender({
      value: '2333',
    });

    expect(result.current).toEqual(3);
  });
});
