import { SubscriptionEntry } from "../types/SubscriptionEntry";
import { SupportedCurrencies } from "../types/SupportedCurrencies";
import { SupportedPeriods } from "../types/SupportedPeriods";

export const getAverageSubscriptionsCost = (
  subscriptions: SubscriptionEntry[],
  basePeriod: SupportedPeriods,
  baseCurrency: SupportedCurrencies
): {
  totalCost: number;
  period: SupportedPeriods;
  currency: SupportedCurrencies;
} => {
  const totalCost = subscriptions.reduce((accumulator, element) => {
    return accumulator + element.convertedCost.value;
  }, 0);
  return {
    totalCost,
    period: basePeriod,
    currency: baseCurrency,
  };
};
