import { error as logError, group, warning, info } from "@actions/core";
import { exec } from "@actions/exec";
import { GitHub } from "@actions/github";
import { WebhookPayloadPullRequest } from "@octokit/webhooks";


const backport = async ({
  botToken,
  botUsername,
  payload: {
    action,
    // The payload has a label property when the action is "labeled".
    // @ts-ignore
    label,
    pull_request: {
      labels,
      merge_commit_sha: mergeCommitSha,
      merged,
      number: pullRequestNumber,
      title: originalTitle,
      user: { login: user },
    },
    repository: {
      name: repo,
      owner: { login: owner },
    },
  },
  token,
}: {
  botToken: string;
  botUsername: string;
  payload: WebhookPayloadPullRequest;
  token: string;
}) => {

  info(`Pull request #${pullRequestNumber}`);
  info(`Pull request #${WebhookPayloadPullRequest["action"]}`);
  info(`Pull request #${WebhookPayloadPullRequest["pull_request"]}`);

};

export { backport };
