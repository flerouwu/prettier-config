# `@flerouwu/prettier-config`
Prettier configuration file used for different projects I make.

## Usage
1. Install `@flerouwu/prettier-config`
```bash
yarn add -D ssh://git@github.com:flerouwu/prettier-config
```

2. Update to `package.json`
```json5
{
	// ...
	"prettier": "@flerouwu/prettier-config",
	// ...
}
```

3. Or update `prettier.config.js`
```js
module.exports = {
	...require('@flerouwu/prettier-config'),
	// ...
}
```
