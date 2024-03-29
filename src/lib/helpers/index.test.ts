import '@testing-library/jest-dom';
import { camelToSentenceCase } from './textTransformations';

describe('Text transformation', () => {
  test('camelToSentenceCase should work correctly', () => {
    expect(camelToSentenceCase('camelCase')).toEqual('Camel Case');

    expect(camelToSentenceCase('')).toEqual('');

    expect(camelToSentenceCase('camelCaseLongVeryLong')).toEqual('Camel Case Long Very Long');
  });
});
