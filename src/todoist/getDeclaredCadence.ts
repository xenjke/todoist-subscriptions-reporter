import { Task } from "@doist/todoist-api-typescript";
import { SupportedPeriods } from "./types/SupportedPeriods";

export function getDeclaredCadence(task: Task): SupportedPeriods {
  const due = task.due;
  if (!due) {
    throw "No due found in task";
  }
  switch (true) {
    case /every month/.test(due.string):
      return "MONTHLY";
    case /every month|every .\d*/.test(due.string):
      return "MONTHLY";
    case /yearly/.test(due.string):
      return "YEARLY";
    default:
      console.error(`Unsupported cadence: ${due.string}`);
      throw "Unsupported cadence";
  }
}
