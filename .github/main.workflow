workflow "Notification on push" {
  on = "push"
  resolves = [
    "Filters for GitHub Actions",
    "Slack notification",
    "Discord notificaction",
    "Discord notificaction CUSTOM",
  ]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}

action "Slack notification" {
  uses = "Ilshidur/action-slack@master"
  secrets = ["SLACK_WEBHOOK"]
  args = "A new commit has been pushed to Ilshidur/action-slack."
  needs = ["Filters for GitHub Actions"]
}
