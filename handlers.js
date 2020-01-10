import fs from 'fs';
import _ from 'lodash';
import yargs from 'yargs';

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
const args = yargs.argv._;

const {
  SLACK_AVATAR,
  SLACK_CUSTOM_PAYLOAD,
  GITHUB_EVENT_PATH,
  GITHUB_ACTOR,
  GITHUB_EVENT_NAME,
  GITHUB_REPOSITORY
} = process.env;

const EVENT_PAYLOAD = JSON.parse(
  fs.readFileSync(GITHUB_EVENT_PATH, "utf8")
);

const replaceMustaches = data => _.template(data)({ ...process.env, EVENT_PAYLOAD })

// Override Slack message
export const getMessage = () => {
  const DEFAULT_MESSAGE = `@${GITHUB_ACTOR} (${GITHUB_EVENT_NAME}) at ${GITHUB_REPOSITORY}`;

  // If any arguments provided, parse moustaches on template string:
  if (args.length) return replaceMustaches(args.join(" "));

  return DEFAULT_MESSAGE;
}

// Custom slack payload
export const parsePayload = () => JSON.parse(replaceMustaches(SLACK_CUSTOM_PAYLOAD));


// overrides default avatar
export const selectAvatar = () => {
  switch (SLACK_AVATAR) {
    case 'sender': return _.get(EVENT_PAYLOAD, 'sender.avatar_url') || false;
    case 'repository': return _.get(EVENT_PAYLOAD, 'owner.avatar_url') || false
    default: return SLACK_AVATAR || false;
  }
}
