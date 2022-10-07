import { getProjectEntities } from './getProjectEntries';
import { getTodoistAPI } from './getTodoistApi';
import { parseTaskToSubscription } from './parseTaskToSubscription';
import type { SubscriptionEntry } from './types/SubscriptionEntry';

export const getProjectTaskAsSubscriptions = async (
  token: string,
  projectName: string
): Promise<SubscriptionEntry[]> => {
  const projectTasks = await getProjectEntities(
    getTodoistAPI(token),
    projectName
  );
  return projectTasks.map(parseTaskToSubscription);
};
