import { Task } from "@doist/todoist-api-typescript";
import { SupportedCurrencies } from "./types/SupportedCurrencies";

export function getDeclaredCurrency(task: Task): SupportedCurrencies {
  const currencyMatches = task.description.match(/\$|£|RUB|EUR|Р/);
  if (!currencyMatches || currencyMatches?.length === 0) {
    throw `Bad or unsupported currency found: ${task.description}`;
  }
  switch (currencyMatches[0]) {
    case "$":
      return "USD";
    case "EUR":
      return "EUR";
    case "£":
      return "GBP";
    case "RUB":
      return "RUB";
    case "Р":
      return "RUB";
    default:
      throw `Bad or unsupported currency found: ${currencyMatches}`;
  }
}
