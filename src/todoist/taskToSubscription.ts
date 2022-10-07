import { Task } from "@doist/todoist-api-typescript";
import { convertCost } from "./convertCost";
import { getDeclaredCadence } from "./getDeclaredCadence";
import { getDeclaredCurrency } from "./getDeclaredCurrency";
import { getDeclaredPrice } from "./getDeclaredPrice";
import { SubscriptionEntry } from "./types/SubscriptionEntry";

export const parseTask = (task: Task): SubscriptionEntry => {
  console.debug(`Parsing task: ${JSON.stringify(task)}`);
  const declaredCurrency = getDeclaredCurrency(task);
  const declaredPrice = getDeclaredPrice(task);
  const declaredCadence = getDeclaredCadence(task);

  return {
    name: task.content,
    cost: convertCost(declaredCurrency, declaredPrice, declaredCadence),
    period: declaredCadence,
    todoistId: task.id,
    originalCurrency: declaredCurrency,
  };
};
