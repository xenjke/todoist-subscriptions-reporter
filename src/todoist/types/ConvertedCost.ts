import { SupportedCurrencies } from "./SupportedCurrencies";
import { SupportedPeriods } from "./SupportedPeriods";

export type ConvertedCost = {
  value: number;
  currency: SupportedCurrencies;
  period: SupportedPeriods;
};
