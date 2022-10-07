import { getPeriodFromDue } from '../../src/todoist/getDeclaredCadence';
import type { SupportedPeriods } from '../../src/todoist/types/SupportedPeriods';
import type { TodoistDue } from '../../src/todoist/types/TodoistDue';

describe('#getPeriodFromDue', () => {
  const testCases: [TodoistDue, SupportedPeriods][] = [
    [
      {
        date: '2022-10-13',
        string: 'every 13',
        isRecurring: true,
      },
      'MONTHLY',
    ],
    [
      {
        date: '2022-10-13',
        string: 'every 2 March',
        isRecurring: true,
      },
      'YEARLY',
    ],
    [
      {
        date: '2022-10-13',
        string: 'every month',
        isRecurring: true,
      },
      'MONTHLY',
    ],
    [
      {
        date: '2022-10-13',
        string: 'every last days',
        isRecurring: true,
      },
      'MONTHLY',
    ],
    [
      {
        date: '2022-10-13',
        string: 'every 5th',
        isRecurring: true,
      },
      'MONTHLY',
    ],
    [
      {
        date: '2023-08-14',
        string: 'yearly 14th aug',
        isRecurring: true,
      },
      'YEARLY',
    ],
    [
      {
        date: '2023-08-14',
        string: 'every 6 months',
        isRecurring: true,
      },
      'HALF_YEARLY',
    ],
    [
      {
        date: '2023-08-14',
        string: 'yearly 29 may',
        isRecurring: true,
      },
      'YEARLY',
    ],
  ];
  testCases.forEach((testCase) => {
    const [due, expectedPeriod] = testCase;
    it(`${due?.string || String(due)}`, () => {
      expect(getPeriodFromDue(due)).toEqual(expectedPeriod);
    });
  });
});
