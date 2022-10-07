import { Task } from "@doist/todoist-api-typescript";
import { SupportedPeriods } from "./types/SupportedPeriods";

export function getDeclaredCadence(task: Task): SupportedPeriods {
  const due = task.due;
  if (!due) {
    throw "No due found in task";
  }
  switch (due.string) {
    case "every month":
      return "MONTHLY";
    case "yearly":
      return "YEARLY";
    default:
      console.error(`Unsupported cadence: ${due.string}`);
      throw "Unsupported cadence";
  }
}
