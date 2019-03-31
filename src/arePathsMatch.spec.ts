import cases from "jest-in-case";

import { arePathsMatch } from ".";

describe("arePathsMatch(pathPattern, pathToCheck)", () => {
  cases(
    "detects that basePath matches to pathToCheck",
    ({ pathPattern }: { [key: string]: string }) => {
      const pathToCheck = "/some/path/to/compare/with";

      const result = arePathsMatch(pathPattern, pathToCheck);
      const expected = true;

      expect(result).toBe(expected);
    },
    [
      { pathPattern: "/some/path/to/compare/with" },
      { pathPattern: "/some/path/to/compare/:with" },
      { pathPattern: "/some/path/:to/:compare/with" }
    ]
  );
});
