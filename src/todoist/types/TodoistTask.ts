export type TodoistTask = {
  id: string;
  assignerId: unknown;
  assigneeId: unknown;
  projectId: string;
  sectionId: unknown;
  parentId: unknown;
  order: number;
  content: string;
  description: string;
  isCompleted: boolean;
  labels: Array<unknown>;
  priority: number;
  commentCount: number;
  creatorId: string;
  createdAt: string;
  due: {
    date: string;
    string: string;
    lang: string;
    isRecurring: boolean;
  };
  url: string;
};
