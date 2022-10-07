import type { ConvertedCost } from './types/ConvertedCost';
import type { SupportedCurrencies } from './types/SupportedCurrencies';
import type { SupportedPeriods } from './types/SupportedPeriods';

export function convertCost(
  declaredCurrency: SupportedCurrencies,
  declaredPrice: number,
  declaredCadence: SupportedPeriods
): ConvertedCost {
  const baseCurrency = 'GBP';
  const basePeriod = 'MONTHLY';

  // eslint-disable-next-line functional/no-let
  let cost = declaredPrice;

  // check if matching the base period
  if (declaredCadence !== basePeriod) {
    // TODO: convert currency
    cost = convertCostPeriodFromTo(cost, declaredCadence, basePeriod);
  }

  cost = convertCostCurrencyFromTo(cost, declaredCurrency, baseCurrency);

  return {
    value: cost,
    currency: baseCurrency,
    period: basePeriod,
  };
}

export function convertCostPeriodFromTo(
  cost: number,
  declaredCadence: SupportedPeriods,
  basePeriod: SupportedPeriods
): number {
  if (basePeriod === declaredCadence) {
    return cost;
  }
  if (declaredCadence === 'YEARLY' && basePeriod === 'MONTHLY') {
    return cost / 12;
  }
  if (declaredCadence === 'HALF_YEARLY' && basePeriod === 'MONTHLY') {
    return cost / 6;
  }
  console.error(`Can't convert ${declaredCadence} to ${basePeriod}`);
  throw `Can't yet convert periods`;
}

export function convertCostCurrencyFromTo(
  cost: number,
  declaredCurrency: string,
  baseCurrency: SupportedCurrencies
): number {
  const baseCurrencyRates: { [key: string]: number } = {
    USD: 0.89,
    EUR: 1,
    RUB: 68.92,
  };
  if (declaredCurrency === baseCurrency) {
    return cost;
  }
  const hasRate = baseCurrencyRates[declaredCurrency];
  if (!hasRate) {
    throw `Don't have rates for ${declaredCurrency}`;
  }
  return cost / baseCurrencyRates[declaredCurrency];
}
