


# Clear Token

This action lets you manually specify a Token by obfuscating it using xor.
By doing so, you will be able to use a Github token in jobs triggered from pull requests on forks. 

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


