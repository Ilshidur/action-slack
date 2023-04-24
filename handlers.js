const fs = require('fs');
const _ = require('lodash');
const core = require('@actions/core');

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const {
  SLACK_AVATAR,
  SLACK_EMOJI,
  SLACK_CUSTOM_PAYLOAD,
  GITHUB_EVENT_PATH,
  GITHUB_ACTOR,
  GITHUB_EVENT_NAME,
  GITHUB_REPOSITORY
} = process.env;

const EVENT_PAYLOAD = JSON.parse(fs.readFileSync(GITHUB_EVENT_PATH, "utf8"));

const replaceMustaches = data => _.template(data)({ ...process.env, EVENT_PAYLOAD })

// Override Slack message
exports.getMessage = () => {
  const args = core.getInput('args');
  const DEFAULT_MESSAGE = `@${GITHUB_ACTOR} (${GITHUB_EVENT_NAME}) at ${GITHUB_REPOSITORY}`;

  if (!args) return DEFAULT_MESSAGE;

  // If any arguments provided, parse moustaches on template string:
  return replaceMustaches(args) || DEFAULT_MESSAGE;
}

// Custom slack payload
exports.parsePayload = () => JSON.parse(replaceMustaches(SLACK_CUSTOM_PAYLOAD));


// overrides default avatar
exports.selectAvatar = () => {
  switch (SLACK_AVATAR) {
    case 'sender': return _.get(EVENT_PAYLOAD, 'sender.avatar_url') || false;
    case 'repository': return _.get(EVENT_PAYLOAD, 'owner.avatar_url') || false
    default: return SLACK_AVATAR || false;
  }
};

exports.emoji = () => {
  return SLACK_EMOJI ? `:${SLACK_EMOJI}:` : null
};
