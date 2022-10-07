import type { ConvertedCost } from './ConvertedCost';
import type { SupportedCurrencies } from './SupportedCurrencies';
import type { TodoistDue } from './TodoistDue';

export type SubscriptionEntry = {
  convertedCost: ConvertedCost;
  name: string;
  originalCost: string;
  originalCurrency: SupportedCurrencies;
  originalDue?: TodoistDue;
  todoistId: string;
};
