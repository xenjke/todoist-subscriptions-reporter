export type TodoistDue =
  | ({
      string: string;
      isRecurring: boolean;
      date: string;
    } & {
      datetime?: string | null | undefined;
      timezone?: string | null | undefined;
    })
  | null
  | undefined;
