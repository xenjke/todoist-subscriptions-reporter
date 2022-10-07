import { Task } from "@doist/todoist-api-typescript";
import { convertCost } from "./convertCost";
import { getDeclaredCadence } from "./getDeclaredCadence";
import { getDeclaredCurrency } from "./getDeclaredCurrency";
import { getDeclaredPrice } from "./getDeclaredPrice";
import { SubscriptionEntry } from "./types/SubscriptionEntry";

export const parseTaskToSubscription = (task: Task): SubscriptionEntry => {
  const declaredCurrency = getDeclaredCurrency(task.description);
  const declaredPrice = getDeclaredPrice(task.description);
  const declaredCadence = getDeclaredCadence(task);

  return {
    name: task.content,
    convertedCost: convertCost(
      declaredCurrency,
      declaredPrice,
      declaredCadence
    ),
    originalCost: task.description,
    originalCurrency: declaredCurrency,
    originalDue: task.due,
    todoistId: task.id,
  };
};
