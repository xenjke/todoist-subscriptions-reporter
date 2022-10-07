import { convertCost } from "../../src/todoist/convertCost";
import { SupportedCurrencies } from "../../src/todoist/types/SupportedCurrencies";
import { SupportedPeriods } from "../../src/todoist/types/SupportedPeriods";

describe("#convertCost to monthly", () => {
  const testCases: [SupportedCurrencies, number, SupportedPeriods, number][] = [
    ["GBP", 5, "MONTHLY", 5],
    ["RUB", 500, "YEARLY", 0.6045656800154768],
    ["RUB", 5, "MONTHLY", 0.07254788160185723],
    ["USD", 5, "MONTHLY", 5.617977528089887],
    ["EUR", 5, "YEARLY", 0.4166666666666667],
    ["GBP", 12, "HALF_YEARLY", 2],
  ];
  testCases.forEach((testCase) => {
    const [declaredCurrency, declaredPrice, declaredCadence, expectedCost] =
      testCase;
    it(`${[declaredCurrency, declaredPrice, declaredCadence].join(
      ", "
    )}`, () => {
      expect(
        convertCost(declaredCurrency, declaredPrice, declaredCadence)
      ).toEqual({
        value: expectedCost,
        currency: "GBP",
        period: "MONTHLY",
      });
    });
  });
});
