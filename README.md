# Slack for GitHub Actions

Sends a Slack notification. Simple as that.

![GitHub Action](action.png "GitHub Action")

*Appearance on Slack :*

![Slack message](slack.png "Slack message")

## Usage

```
action "Slack notification" {
  uses = "Ilshidur/actions/slack@master"
  secrets = ["SLACK_WEBHOOK"]
  args = "A new commit has been pushed."
}
```

**NOTICE :** for stability purposes, it is recommended to use the action with an explicit commit SHA-1 :

`uses = "Ilshidur/actions/slack@416b4dd"` (=> link to the commits list : https://github.com/Ilshidur/actions/commits/master)

### Arguments

The argument is the message to display in the Slack notification.

#### Examples

* `args = "Hello, beautiful ! I ran a GitHub Actions for you <3"`
* `args = "I showed you my commit. Please respond."`

### Secrets

* **`SLACK_WEBHOOK`**: the Slack webhook URL (**required**, see https://api.slack.com/incoming-webhooks)
* That's all.
