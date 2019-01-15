#!/bin/sh

set -eu

echo Sending $*

curl -X POST --data-urlencode "payload={\"username\": \"$GITHUB_ACTION\", \"text\": \"$GITHUB_REPOSITORY/$GITHUB_WORKFLOW triggered by $GITHUB_ACTOR ($GITHUB_EVENT_NAME) :\n$*\", \"icon_url\": \"https://raw.githubusercontent.com/quintessence/slack-icons/master/images/github-logo-slack-icon.png\"}" $SLACK_WEBHOOK
