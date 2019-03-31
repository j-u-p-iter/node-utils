import { makeUrl } from ".";

describe("makeUrl", () => {
  describe("with default options", () => {
    it("makes url with default protocol", () => {
      const result = makeUrl();
      const expected = "http://localhost:3000";

      expect(result).toBe(expected);
    });
  });

  describe("with predefined options", () => {
    let predefinedOptions: any;

    beforeAll(() => {
      predefinedOptions = {
        host: "somehost",
        path: "/some/url/path",
        protocol: "https",
        queryObject: { key: "value", oneMoreKey: "oneMoreValue" }
      };
    });

    describe("with port", () => {
      it("makes url properly", () => {
        const result = makeUrl({
          ...predefinedOptions,
          port: 5000
        });
        const expected = `https://somehost:5000/some/url/path?key=value&oneMoreKey=oneMoreValue`;

        expect(result).toBe(expected);
      });
    });

    describe("without port", () => {
      it("makes url properly", () => {
        const result = makeUrl({
          ...predefinedOptions,
          port: null
        });
        const expected = `https://somehost/some/url/path?key=value&oneMoreKey=oneMoreValue`;

        expect(result).toBe(expected);
      });
    });
  });
});
