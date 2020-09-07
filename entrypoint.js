const axios = require('axios');
const _ = require('lodash');
const core = require('@actions/core');
const message = require('./message');

const REQUIRED_ENV_VARS = [
  "GITHUB_EVENT_PATH",
  "SLACK_WEBHOOK",
];

try {
  _.forEach(REQUIRED_ENV_VARS, env => {
    if (_.isEmpty(process.env[env])) {
      process.exitCode = 1;
      throw new Error(`Missing environment variable. ${env} is required.`);
    }
  });
} catch (e) { core.setFailed(e.message); }


if (!process.exitCode) {
  core.info("Sending message ...");

  axios.post(process.env.SLACK_WEBHOOK, message.get())
    .then(() => {
      process.exitCode = 0;
      return core.info('Message sent! Shutting down ...');
    })
    .catch((err) => {
      process.exitCode = 1;
      const errMessage = err.response ? err.response.data : err.message;
      return core.setFailed(`Error: ${errMessage}`);
    })
}
