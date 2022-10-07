import { getDeclaredCurrency } from '../../src/todoist/getDeclaredCurrency';
import type { SupportedCurrencies } from '../../src/todoist/types/SupportedCurrencies';

describe('#getDeclaredCurrency', () => {
  const testCases: [string, SupportedCurrencies][] = [
    ['£', 'GBP'],
    ['P', 'RUB'],
    ['RUB', 'RUB'],
    ['$', 'USD'],
    ['EUR', 'EUR'],
    ['₽', 'RUB'],
  ];
  testCases.forEach((testCase) => {
    const [incomingString, expectedCurrency] = testCase;
    it(`${incomingString}`, () => {
      expect(getDeclaredCurrency(incomingString)).toEqual(expectedCurrency);
    });
  });

  it("should throw when can't parse", () => {
    expect(() => getDeclaredCurrency('')).toThrow();
  });
});
