import { convertCost } from "../../src/todoist/convertCost";
import { SupportedCurrencies } from "../../src/todoist/types/SupportedCurrencies";
import { SupportedPeriods } from "../../src/todoist/types/SupportedPeriods";

describe("#convertCost", () => {
  const testCases: [SupportedCurrencies, number, SupportedPeriods, number][] = [
    ["GBP", 5, "MONTHLY", 5],
    ["RUB", 500, "YEARLY", 0.59],
    ["RUB", 5, "MONTHLY", 0.071],
    ["USD", 5, "MONTHLY", 5],
    ["EUR", 5, "YEARLY", 5],
  ];
  testCases.forEach((testCase) => {
    const [declaredCurrency, declaredPrice, declaredCadence, expectedCost] =
      testCase;
    it(`${[declaredCurrency, declaredPrice, declaredCadence].join(
      ", "
    )}`, () => {
      expect(
        convertCost(declaredCurrency, declaredPrice, declaredCadence)
      ).toEqual([expectedCost, "GBP", "MONTHLY"]);
    });
  });
});
