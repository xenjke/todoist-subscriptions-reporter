import { SupportedCurrencies } from "./types/SupportedCurrencies";
import { SupportedPeriods } from "./types/SupportedPeriods";

export function convertCost(
  declaredCurrency: SupportedCurrencies,
  declaredPrice: number,
  declaredCadence: string
): [number, "GBP", "MONTHLY"] {
  const baseCurrency = "GBP";
  const basePeriod = "MONTHLY";

  let cost = declaredPrice;

  const rates = {
    usd: 0.9,
    eur: 1,
    rub: 0.07,
  };

  // check if matching the base period
  if (declaredCadence !== basePeriod) {
    // TODO: convert currency
    cost = convertCostPeriodFromTo(cost, declaredCadence, basePeriod);
  }

  // check if matching the base currency
  if (declaredCurrency !== baseCurrency) {
    cost = convertCostCurrencyFromTo(cost, declaredCurrency, baseCurrency);
  }

  return [cost, baseCurrency, basePeriod];
}

function convertCostPeriodFromTo(
  cost: number,
  declaredCadence: string,
  basePeriod: string
): number {
  return cost;
}

function convertCostCurrencyFromTo(
  cost: number,
  declaredCurrency: string,
  baseCurrency: string
): number {
  return cost;
}
