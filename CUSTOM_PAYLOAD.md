# 🚀 Slack for GitHub Actions - CUSTOM PAYLOAD

Custom payload allows interpolate hook data and event payload

## Example
```yml
  env:
    SLACK_CUSTOM_PAYLOAD: '{"text":"Custom payload from {{ GITHUB_REPOSITORY }} \\n *with* `new` _line_ escaped","username": "{{ GITHUB_ACTOR }}"}'
```

> ## IMPORTANT:
>   - Escaped characters (like: line-breaks) needs to be escaped 2x: <br/> ex: `\n` becomes: `\\n`
>   - Mind to send a quoted JSON string payload as the example above.
>   - Using a custom payload will cause the other slack env vars data to be ignored.
