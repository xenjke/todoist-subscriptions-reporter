import { convertCostCurrencyFromTo } from "../../src/todoist/convertCost";
import { SupportedCurrencies } from "../../src/todoist/types/SupportedCurrencies";

describe("#convertCostCurrencyFromTo", () => {
  const testCases: [number, string, SupportedCurrencies, number][] = [
    [5, "GBP", "GBP", 5],
    [500, "RUB", "GBP", 7.254788160185722],
    [5, "RUB", "GBP", 0.07254788160185723],
    [5, "USD", "GBP", 5.617977528089887],
    [12, "EUR", "GBP", 12],
  ];
  testCases.forEach((testCase) => {
    const [cost, declaredCurrency, baseCurrency, expectedCost] = testCase;
    it(`${[cost, declaredCurrency, baseCurrency].join(", ")}`, () => {
      expect(
        convertCostCurrencyFromTo(cost, declaredCurrency, baseCurrency)
      ).toEqual(expectedCost);
    });
  });
});
