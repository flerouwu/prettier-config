<!-- Link References -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Unlicense]: https://choosealicense.com/licenses/unlicense/
[LICENSE]: LICENSE
[Prettier]: https://prettier.io/

# `@flerouwu/prettier-config`
The prettier configuration file that I use for all projects that are solely developed by myself. This configuration is licensed under [Unlicense], dedicated to the public domain. See more in [LICENSE].

## Installation
1. Install `@flerouwu/prettier-config`.
	```ps1
	# Only run one command in this code block.
	# Theres different examples for different package managers.

	# Required - Prettier
	yarn add -D prettier # Yarn
	pnpm add -D prettier # PNPM
	npm i --save-dev prettier # NPM

	# Only required unless you wish to copy the config directly.
	yarn add -D github:flerouwu/prettier-config # Yarn
	pnpm add -D github:flerouwu/prettier-config # PNPM
	npm i --save-dev flerouwu/prettier-config # NPM
	```

2. Tell [Prettier] about the config. 
	There are a few ways you can do this:
	
	- Modify `package.json` (recommended, cannot override):
		```json5
		{
			// Name, Version, etc. Above ^^^
			"prettier": "@flerouwu/prettier-config",
			// Dependencies, Scripts, etc. Below
		}
		```

	- Create/modify a dedicated Prettier config ([docs](https://prettier.io/docs/en/configuration)) (recommended, can override):
		<details>
		<summary>
		<code>prettier.config.mjs</code>
		 - ESM Syntax
		</summary>

		```js
		// https://github.com/flerouwu/prettier-config
		import flerouwu from "@flerouwu/prettier-config"

		/** @type {import("prettier").Config} */
		export default {
			...flerouwu,

			// Add your overrides below.
			// ...
		}
		```
		</details>

		<details>
		<summary>
		<code>prettier.config.cjs</code>
		 - CommonJS Syntax
		</summary>

		```js
		/** @type {import("prettier").Config} */
		module.exports {
			// https://github.com/flerouwu/prettier-config
			...require("@flerouwu/prettier-config"),

			// Add your overrides below.
			// ...
		}
		```
		</details>
	
	- Copy contents of `prettier.config.mjs` from the repository to a dedicated file (not recommended).
