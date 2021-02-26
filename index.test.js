const { sum } = require("./index");

describe("some meaningful tests", () => {
  test("it should sum 1 and 2", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("it should sum 3 and 4", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
  });
});
