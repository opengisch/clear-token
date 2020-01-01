import { error as logError, group, warning, info } from "@actions/core";
import { WebhookPayloadPullRequest } from "@octokit/webhooks";


const prinfo = async ({
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
}: {
  payload: WebhookPayloadPullRequest;
}) => {

  info(`Pull request #${pullRequestNumber}`);
  info(`Pull request title #${originalTitle}`);

  return {number: pullRequestNumber, title: originalTitle};

};

export { prinfo };
