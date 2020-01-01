

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const repoSlug = core.getInput('repo_slug');
  const token = getInput("github_token", { required: true });
  const botUsername = getInput("bot_username", { required: true });
  const encryptedBotToken = getInput("bot_token", { required: true });
  const botTokenKey = getInput("bot_token_key", { required: true });
  const botToken = xorHexStrings(encryptedBotToken, botTokenKey);
  debug(JSON.stringify(context, null, 2));

  console.log(`Will create an issue on repo: ${repoSlug}`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}