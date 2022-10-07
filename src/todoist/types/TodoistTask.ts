export type TodoistTask = {
  id: string;
  assignerId: any;
  assigneeId: any;
  projectId: string;
  sectionId: any;
  parentId: any;
  order: number;
  content: string;
  description: string;
  isCompleted: boolean;
  labels: Array<any>;
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
