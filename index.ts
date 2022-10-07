import { getProjectTaskAsSubscriptions } from "./src/todoist/getProjectTaskAsSubscriptions";
import { getAverageSubscriptionsCost } from "./src/todoist/reporter/getAverageSubscriptionsCost";

const TOKEN = process.env.API_TOKEN;
if (!TOKEN) {
  throw "No TOKEN found";
}
const SUBSCRIPTIONS_PROJECT_NAME = process.env.PROJECT_NAME;
if (!SUBSCRIPTIONS_PROJECT_NAME) {
  throw "No PROJECT_NAME found";
}

getProjectTaskAsSubscriptions(TOKEN, SUBSCRIPTIONS_PROJECT_NAME)
  .then((subscriptions) => {
    const averages = getAverageSubscriptionsCost(
      subscriptions,
      "MONTHLY",
      "GBP"
    );
    console.log(averages);
  })
  .catch(console.error);
