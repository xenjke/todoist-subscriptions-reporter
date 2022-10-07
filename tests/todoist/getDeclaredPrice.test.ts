import { getDeclaredPrice } from '../../src/todoist/getDeclaredPrice';

describe('#getDeclaredPrice', () => {
  const testCases = [
    ['0', 0],
    ['1', 1],
    ['1,1', 1.1],
    ['1.1', 1.1],
    ['0.1', 0.1],
    ['100,1', 100.1],
    ['99', 99],
    ['£5', 5],
  ];
  testCases.forEach((testCase) => {
    const [incomingString, expectedNumber] = testCase;
    it(`${incomingString}`, () => {
      expect(getDeclaredPrice(incomingString as string)).toEqual(
        expectedNumber
      );
    });
  });

  it("should throw when can't parse", () => {
    expect(() => getDeclaredPrice('')).toThrow();
  });
});
