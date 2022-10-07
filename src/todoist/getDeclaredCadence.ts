import type { Task } from '@doist/todoist-api-typescript';
import type { TodoistDue } from './types/TodoistDue';
import type { SupportedPeriods } from './types/SupportedPeriods';

export function getDeclaredCadence(task: Task): SupportedPeriods {
  const due = task.due;

  if (!due) {
    throw 'No due found in task';
  }

  return getPeriodFromDue(due);
}

export const getPeriodFromDue = (due: TodoistDue): SupportedPeriods => {
  if (!due) {
    throw 'No due passed';
  }

  if (!due.isRecurring) {
    console.warn(`Not recurring due found: ${due.string}. Treating as monthly`);
    return 'MONTHLY';
  }

  switch (true) {
    case /every \d* months/.test(due.string):
      return 'HALF_YEARLY';
    case /every month$/.test(due.string):
      return 'MONTHLY';
    case /every last days$/.test(due.string):
      return 'MONTHLY';
    // every day of month, once a year
    case /every \d* [A-z]+$/.test(due.string):
      return 'YEARLY';
    // on a day of month, every month
    case /every \d*$/.test(due.string):
      return 'MONTHLY';
    case /every \d*[th|rd|nd]+$/.test(due.string):
      return 'MONTHLY';
    case /yearly/.test(due.string):
      return 'YEARLY';
    default:
      console.error(`Unsupported cadence: ${due.string}`);
      throw 'Unsupported cadence';
  }
};
