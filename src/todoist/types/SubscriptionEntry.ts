import { SupportedCurrencies } from "./SupportedCurrencies";
import { SupportedPeriods } from "./SupportedPeriods";

export type SubscriptionEntry = {
  period: SupportedPeriods;
  cost: number;
  originalCurrency: SupportedCurrencies;
  name: string;
  todoistId: string;
};
