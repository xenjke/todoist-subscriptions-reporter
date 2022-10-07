import { ConvertedCost } from "./ConvertedCost";
import { SupportedCurrencies } from "./SupportedCurrencies";
import { TodoistDue } from "./TodoistDue";

export type SubscriptionEntry = {
  convertedCost: ConvertedCost;
  name: string;
  originalCost: string;
  originalCurrency: SupportedCurrencies;
  originalDue?: TodoistDue;
  todoistId: string;
};
