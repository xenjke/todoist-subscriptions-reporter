import type { Task, TodoistApi } from '@doist/todoist-api-typescript';

export const getProjectEntities = async (
  api: TodoistApi,
  projectName: string
): Promise<Task[]> => {
  const projects = await api.getProjects();
  const filteredProjectId = projects.find((project) => {
    return project.name.indexOf(projectName) > -1;
  })?.id;

  if (!filteredProjectId) {
    throw `Couldn't find the project by it's name: ${projectName}`;
  }

  return api.getTasks({
    projectId: filteredProjectId,
  });
};
