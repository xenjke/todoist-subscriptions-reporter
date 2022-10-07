import type { SupportedCurrencies } from './SupportedCurrencies';
import type { SupportedPeriods } from './SupportedPeriods';

export type ConvertedCost = {
  value: number;
  currency: SupportedCurrencies;
  period: SupportedPeriods;
};
