# Custom payload

Custom payload allows interpolate hook data and event payload

#### example
```yml
  env:
    SLACK_CUSTOM_PAYLOAD: '{"text":"Custom payload from {{ GITHUB_REPOSITORY }} \\n *with* `new` _line_ escaped","username": "{{ GITHUB_ACTOR }}"}'
```

> ## IMPORTANT:
>   - escaped characteres (like: line-breaks) needs to be escaped 2x: <br/> ex: `\n` becomes: `\\n`
>   - Mind to send a quoted JSON string payload as the example above.
>   - if using custom payload the other slack env vars data will be ignored.
