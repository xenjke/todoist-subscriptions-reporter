import { getDeclaredCurrency } from "../../src/todoist/getDeclaredCurrency";
import { SupportedCurrencies } from "../../src/todoist/types/SupportedCurrencies";

describe("#getDeclaredCurrency", () => {
  const testCases: [string, SupportedCurrencies][] = [
    ["£", "GBP"],
    ["P", "RUB"],
    ["RUB", "RUB"],
    ["$", "USD"],
    ["EUR", "EUR"],
  ];
  testCases.forEach((testCase) => {
    const [incomingString, expectedCurrency] = testCase;
    it(`${incomingString}`, () => {
      expect(getDeclaredCurrency(incomingString as string)).toEqual(
        expectedCurrency
      );
    });
  });

  it("should throw when can't parse", () => {
    expect(() => getDeclaredCurrency("")).toThrow();
  });
});
