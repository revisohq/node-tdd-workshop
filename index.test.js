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

  test("it should throw an error in of string", () => {
    const shouldNotWork = jest.fn(() => {
      //console.log('I should NOT see this')
    });

    const shouldWork = jest.fn((err) => {
      //console.log('it works', err)
    })

    try {
      sum('3', 4);
      shouldNotWork();
    } catch (err) {
      shouldWork(err);
    }

    expect(shouldWork.mock.calls.length).toBe(1)
    expect(shouldNotWork.mock.calls.length).toBe(0)
  });
});
