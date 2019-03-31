import qs from 'qs';

export const makeUrl = ({
  path = '',
  protocol = 'http',
  host = 'localhost',
  port = 3000,
  queryObject = {},
}: { 
  path?: string; 
  protocol?: string; 
  host?: string; 
  port?: number; 
  queryObject?: { [key: string]: number | string };
} = {}): string => {
  const queryString = qs.stringify(queryObject, { addQueryPrefix: true });

  return `${protocol}://${host}${port ? `:${port}` : ''}${path}${queryString}`
};
