import { ReportedCost } from "./ReportedCost";
import { SupportedCurrencies } from "./SupportedCurrencies";
import { SupportedPeriods } from "./SupportedPeriods";

export type SubscriptionEntry = {
  period: SupportedPeriods;
  cost: ReportedCost;
  originalCurrency: SupportedCurrencies;
  name: string;
  todoistId: string;
};
