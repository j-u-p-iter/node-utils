import pathToRegexp from 'path-to-regexp';

export const arePathsMatch = (pathPattern: string, pathToCheck: string): boolean => {
  const pathPatternRegexp = pathToRegexp(pathPattern);

  return Boolean(pathToCheck.match(pathPatternRegexp));
};
