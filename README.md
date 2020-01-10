# 🚀 Slack for GitHub Actions

[![Build Status][build-badge]][build-url]

Sends a Slack notification. Simple as that.

![GitHub Action](action.png "GitHub Action")

*Appearance on Slack :*

![Slack message](slack.png "Slack message")

This GitHub action is part of a list of Actions that are located in an other repo. Feel free to check it out : https://github.com/Ilshidur/actions.

<hr/>

## Usage

```yaml
- name: Slack notification
  env:
    SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
    SLACK_USERNAME: ThisIsMyUsername # Optional. (defaults to webhook app)
    SLACK_CHANNEL: general # Optional. (defaults to webhook)
    SLACK_AVATAR: repository # Optional. can be (repository, sender, an URL) (defaults to webhook app avatar)
  uses: Ilshidur/action-slack@master
  with:
    args: 'A new commit has been pushed.' # Optional
```

**NOTICE :** for stability purposes, it is recommended to use the action with an explicit commit SHA-1 :

`Ilshidur/action-slack@9273a03` (=> link to the commits list : https://github.com/Ilshidur/action-slack/commits/master)

### Arguments

The argument is the message to display in the Slack notification.

**Environment variables** can be interpolated in the message using brackets (`{{` and `}}`) :

e.g.: `Action called : {{ GITHUB_ACTION }}`

*Note :* be careful to properly [format your messages for Slack](https://api.slack.com/docs/message-formatting).

**Event Payload** data can also be interpolated in the message using brackets (`{{` and `}}`) with the `EVENT_PAYLOAD` variable.

e.g.: `Action called: {{ GITHUB_ACTION }} as {{ EVENT_PAYLOAD.pull_request.id }}`

> See the [event types](https://developer.github.com/v3/activity/events/types/) for valid payload informations.

#### Examples

* `args: "Hello, beautiful ! I ran a GitHub Action for you <3"`
* `args: "I showed you my commit. Please respond."`

### Environment variables

* **`SLACK_WEBHOOK`** **(required)**: the Slack webhook URL (see https://api.slack.com/incoming-webhooks).
* **`SLACK_USERNAME`** *(optional)* : overrides username. Defaults to the Slack webhook bot name.
* **`SLACK_CHANNEL`** *(optional)* : overrides the default channel of the webhook. If not set, the message will be sent to the channel associated to the webhook.
* **`SLACK_AVATAR`** *(optional)* : overrides the message avatar. Can be (repository, sender or an URL) If not set, the avatar of the slack webhook's bot picture.
* **`SLACK_CUSTOM_PAYLOAD`** *(advanced)* : JSON string that sets full payload. instructions see [CUSTOM_PAYLOAD](CUSTOM_PAYLOAD.md)

## Debugging / testing / development

Developers, all you need is in the [DEVELOPMENT.md](DEVELOPMENT.md) file.

## Alternatives

Because open source is about everyone :

https://github.com/marketplace/actions/post-slack-message <br/>
![](https://img.shields.io/github/stars/pullreminders/slack-action.svg?label=Stars&style=social)

https://github.com/marketplace/actions/slack-notify <br/>
![](https://img.shields.io/github/stars/rtCamp/action-slack-notify.svg?label=Stars&style=social)

https://github.com/marketplace/actions/slack-bot-action <br/>
![](https://img.shields.io/github/stars/krider2010/slack-bot-action.svg?label=Stars&style=social)

https://github.com/marketplace/actions/slatify <br/>
![](https://img.shields.io/github/stars/homoluctus/slatify.svg?label=Stars&style=social)

<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this GitHub Action !<br/>
  <a href="https://github.com/Ilshidur/action-slack/issues/new">Your feedback is appreciated</a>
</p>

[build-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FIlshidur%2Faction-slack%2Fbadge&style=flat
[build-url]: https://actions-badge.atrox.dev/Ilshidur/action-slack/goto
