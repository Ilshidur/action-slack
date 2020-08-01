# 🚀 Slack for GitHub Actions

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status][build-badge]][build-url]

Sends a Slack notification. Simple as that.

![GitHub Action](action.png "GitHub Action")

*Appearance on Slack :*

![Slack message](slack.png "Slack message")

This GitHub action is part of a list of Actions that are located in an other repo. Feel free to check it out : https://github.com/Ilshidur/actions.

## Compatibility note

As this Action is containerized with Docker, [it can only run on Linux environments](https://help.github.com/en/actions/building-actions/about-actions#types-of-actions).

> Docker container actions can only execute in the GitHub-hosted Linux environment.

> Self-hosted runners must use a Linux operating system and have Docker installed to run Docker container actions. For more information about the requirements of self-hosted runners, see "About self-hosted runners."

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

`Ilshidur/action-slack@fb92a78` (=> link to the commits list : https://github.com/Ilshidur/action-slack/commits/master)

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
* **`SLACK_AVATAR`** *(optional)* : overrides the message avatar. Can be `'repository'`, `'sender'` or an URL. If not set, the avatar of the Slack webhook's bot picture will be used.
* **`SLACK_CUSTOM_PAYLOAD`** *(advanced)* : JSON string that sets full payload. instructions see [CUSTOM_PAYLOAD](CUSTOM_PAYLOAD.md)

## Debugging / testing / development

Developers, all you need is in the [DEVELOPMENT.md](DEVELOPMENT.md) file.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://lion.alia.ml"><img src="https://avatars1.githubusercontent.com/u/12537491?v=4" width="100px;" alt=""/><br /><sub><b>Christhopher Lion</b></sub></a><br /><a href="https://github.com/Ilshidur/action-slack/commits?author=itsmelion" title="Code">💻</a> <a href="#ideas-itsmelion" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/Ilshidur/action-slack/commits?author=itsmelion" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

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

https://github.com/marketplace/actions/slack-notify-build <br/>
![](https://img.shields.io/github/stars/voxmedia/github-action-slack-notify-build.svg?label=Stars&style=social)

https://github.com/marketplace/actions/action-slack <br/>
![](https://img.shields.io/github/stars/8398a7/action-slack.svg?label=Stars&style=social)

<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this GitHub Action !<br/>
  <a href="https://github.com/Ilshidur/action-slack/issues/new">Your feedback is appreciated</a>
</p>

[build-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FIlshidur%2Faction-slack%2Fbadge&style=flat
[build-url]: https://actions-badge.atrox.dev/Ilshidur/action-slack/goto
