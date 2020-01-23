const axios = require('axios');
const message = require('./message.js');

const REQUIRED_ENV_VARS = [
  "GITHUB_EVENT_PATH",
  "SLACK_WEBHOOK",
];

REQUIRED_ENV_VARS.forEach(env => {
  if (!process.env[env] || !process.env[env].length) {
    console.error(`Missing environment variable. ${env} is required.`);

    return process.exit(1);
  }
});

console.log("Sending message ...");
(() => axios
  .post(process.env.SLACK_WEBHOOK, message.get())
  .then(() => {
    console.log("Message sent ! Shutting down ...");
    return process.exitCode = 0;
  })
  .catch(err => {
    console.error("Message :", err.response ? err.response.data : err.message);
    return process.exitCode = 1;
  })
)();
