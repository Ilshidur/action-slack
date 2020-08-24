const axios = require('axios');
const _ = require('lodash');
const message = require('./message');

const REQUIRED_ENV_VARS = [
  "GITHUB_EVENT_PATH",
  "SLACK_WEBHOOK",
];

_.forEach(REQUIRED_ENV_VARS, env => {
  if (_.isEmpty(process.env[env])) {
    console.error(`Missing environment variable. ${env} is required.`);

    return process.exit(1);
  }
});

console.info("Sending message ...");
(() => axios
  .post(process.env.SLACK_WEBHOOK, message.get())
  .then(() => {
    console.info("Message sent ! Shutting down ...");
    return process.exitCode = 0;
  })
  .catch((err) => {
    console.error("Message :", err.response ? err.response.data : err.message);
    return process.exitCode = 1;
  })
)();
