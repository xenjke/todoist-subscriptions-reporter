import { Task } from "@doist/todoist-api-typescript";
import { SupportedCurrencies } from "./types/SupportedCurrencies";

export function getDeclaredCurrency(description: string): SupportedCurrencies {
  const currencyMatches = description.match(/\$|£|RUB|EUR|Р|P/);
  if (!currencyMatches || currencyMatches?.length === 0) {
    throw `Bad or unsupported currency found: ${description}`;
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
    case "P":
      return "RUB";
    default:
      throw `Bad or unsupported currency found: ${currencyMatches}`;
  }
}
