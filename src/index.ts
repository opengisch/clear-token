import { getInput, setFailed, setOutput } from "@actions/core";

import { xorHexStrings } from "./xor";

const run = async () => {
  try {
    const encrypted = getInput("bot_token_encrypted", { required: true });
    const xorKey = getInput("bot_token_xor_key", { required: true });
    const token = xorHexStrings(encrypted, xorKey);

    setOutput('token', token);

  } catch (error) {
    setFailed(error.message);
  }
};

run();
