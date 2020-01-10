FROM mhart/alpine-node:12

LABEL "com.github.actions.name"="GitHub Action for Slack"
LABEL "com.github.actions.description"="Outputs a message to Slack."
LABEL "com.github.actions.icon"="hash"
LABEL "com.github.actions.color"="red"

LABEL "repository"="https://github.com/Ilshidur/actions"
LABEL "homepage"="https://github.com/Ilshidur/action-slack"
LABEL "maintainer"="Ilshidur <ilshidur@gmail.com>"
LABEL "version"="2.0.0"

ADD package.json yarn.lock /
RUN yarn --production
COPY . /
RUN chmod +x /index.js

ARG GITHUB_EVENT_PATH=./event-example.json
ENV GITHUB_EVENT_PATH $GITHUB_EVENT_PATH

ENTRYPOINT ["node", "./"]
