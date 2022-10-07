import { TodoistApi } from '@doist/todoist-api-typescript';

export const getTodoistAPI = (token: string): TodoistApi => {
  return new TodoistApi(token);
};
