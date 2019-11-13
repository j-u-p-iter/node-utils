import { makeUrl } from ".";

describe("makeUrl", () => {
  describe("with default options", () => {
    it("makes url with default protocol", () => {
      const result = makeUrl();
      const expected = "https://localhost";

      expect(result).toBe(expected);
    });
  });

  describe("with predefined options", () => {
    describe("with port", () => {
      it("makes url properly", () => {
        const result = makeUrl({
          host: "somehost",
          path: "some/url/path",
          port: 5000,
          protocol: "http",
          queryObject: { key: "value", oneMoreKey: "oneMoreValue" }
        });
        const expected = `http://somehost:5000/some/url/path?key=value&oneMoreKey=oneMoreValue`;

        expect(result).toBe(expected);
      });
    });
  });
});
