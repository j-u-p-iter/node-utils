import qs from "qs";

export const makeUrl = ({
  host = "localhost",
  path = "",
  port = 3000,
  protocol = "http",
  queryObject = {}
}: {
  host?: string;
  path?: string;
  port?: number | null;
  protocol?: string;
  queryObject?: { [key: string]: number | string };
} = {}): string => {
  const queryString = qs.stringify(queryObject, { addQueryPrefix: true });

  return `${protocol}://${host}${port ? `:${port}` : ""}${path}${queryString}`;
};
