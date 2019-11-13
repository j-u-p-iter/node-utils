import qs from "qs";

export const makeUrl = ({
  path,
  port,
  host = "localhost",
  protocol = "https",
  queryObject = {}
}: {
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  queryObject?: { [key: string]: number | string };
} = {}): string => {
  const preparedPort = port ? `:${port}` : "";
  const preparedPath = path ? `/${path}` : "";
  const queryString = qs.stringify(queryObject, { addQueryPrefix: true });

  return `${protocol}://${host}${preparedPort}${preparedPath}${queryString}`;
};
