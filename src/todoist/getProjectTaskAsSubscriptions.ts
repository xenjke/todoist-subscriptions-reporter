import { getProjectEntities } from "./getProjectEntries";
import { getTodoistAPI } from "./getTodoistApi";
import { parseTask } from "./taskToSubscription";
import { SubscriptionEntry } from "./types/SubscriptionEntry";

export const getProjectTaskAsSubscriptions = async (
  token: string,
  projectName: string
): Promise<SubscriptionEntry[]> => {
  const projectTasks = await getProjectEntities(
    getTodoistAPI(token),
    projectName
  );
  return projectTasks.map(parseTask);
};
