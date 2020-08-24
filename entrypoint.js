const axios = require('axios');
const _ = require('lodash');
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
} catch (e) { console.error(e.message); }


(() => {
  if (!process.exitCode) {
    console.info("Sending message ...");

    axios.post(process.env.SLACK_WEBHOOK, message.get())
      .then(() => {
        console.info("Message sent! Shutting down ...");
        return process.exitCode = 0;
      })
      .catch((err) => {
        console.error("Error: ", err.response ? err.response.data : err.message);
        return process.exitCode = 1;
      })
  }
})();
