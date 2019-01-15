FROM debian:9.6-slim

LABEL "com.github.actions.name"="GitHub Action for Slack"
LABEL "com.github.actions.description"="Outputs a message to Slack."
LABEL "com.github.actions.icon"="hash"
LABEL "com.github.actions.color"="red"

LABEL "repository"="https://github.com/Ilshidur/actions"
LABEL "homepage"="https://github.com/Ilshidur/actions/slack"
LABEL "maintainer"="Ilshidur <ilshidur@gmail.com>"
LABEL "version"="1.0.1"

RUN apt-get update && apt-get install -y curl

ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
#CMD "A new commit has been pushed."
