import { debug, getInput, setFailed, setOutput, info } from "@actions/core";
import { context } from "@actions/github";
import { WebhookPayloadPullRequest } from "@octokit/webhooks";

import { prinfo } from "./prinfo";
import { xorHexStrings } from "./xor";

const run = async () => {
  try {
    const token = getInput("github_token", { required: true });
    const botUsername = getInput("bot_username", { required: true });
    const encryptedBotToken = getInput("bot_token", { required: true });
    const botTokenKey = getInput("bot_token_key", { required: true });
    const botToken = xorHexStrings(encryptedBotToken, botTokenKey);

    //info(JSON.stringify(context, null, 2));

    const pr_info = await prinfo({
      payload: context.payload as WebhookPayloadPullRequest,
    });

    setOutput('pr-number', pr_info.number.toString());
    setOutput('pr-title', pr_info.title.toString());

  } catch (error) {
    setFailed(error.message);
  }
};

run();
