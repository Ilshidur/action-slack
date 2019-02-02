const axios = require('axios');
const _ = require('lodash');
const querystring = require('querystring');
const { argv } = require('yargs');

_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

const message = argv._.join(' ');
const compiled = _.template(message);

const payload = {
    username: process.env.GITHUB_ACTION,
    ...process.env.SLACK_CHANNEL ? { channel: process.env.SLACK_CHANNEL } : {},
    text: `${process.env.GITHUB_REPOSITORY}/${process.env.GITHUB_WORKFLOW} triggered by ${process.env.GITHUB_ACTOR} (${process.env.GITHUB_EVENT_NAME}) :\n${compiled(process.env)}`,
    icon_url: 'https://raw.githubusercontent.com/quintessence/slack-icons/master/images/github-logo-slack-icon.png',
};

const url = process.env.SLACK_WEBHOOK;

(async () => {
    console.log('Sending message ...');
    await axios.post(url, querystring.stringify({ payload: JSON.stringify(payload) }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    console.log('Message sent ! Shutting down ...');
    process.exit(0);
})()
    .catch((err) => {
        console.error(err.message);
        console.error('Message :', err.response.data);
        process.exit(1);
    });
