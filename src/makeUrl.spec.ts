import { makeUrl } from './makeUrl';

describe('makeUrl', () => {
  let urlPath: string;

  beforeAll(() => {
    urlPath = '/some/url/path';
  });

  describe('with default options', () => {
    it('makes url with default protocol', () => {
      const result = makeUrl();
      const expected = 'http://localhost:3000';

      expect(result).toBe(expected);
    });
  });

  describe('with predefined options', () => {
    it('makes url with default protocol', () => {
      const result = makeUrl({ 
        path: urlPath, 
        protocol: 'https',
        host: 'somehost',
        port: 5000,
        queryObject: { key: 'value', oneMoreKey: 'oneMoreValue' },
      });
      const expected = `https://somehost:5000${urlPath}?key=value&oneMoreKey=oneMoreValue`;

      expect(result).toBe(expected);
    });
  });
});
