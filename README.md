


# Clear Token

This will allow to use a Github token when jobs are triggered on pull requests from forks. 
This will obfuscate the key, Github will not complain that the key is in clear in the repo.

## Inputs

### `bot_token_encrypted`

The token encrypted using xor

required: true

### `bot_token_xor_key:

The xor key

required: true

## Example usage

```
uses: actions/clear-token@v1.0.11
with:
  bot_token_encrypted: …
  bot_token_xor_key: …
```
