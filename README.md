<!-- Link References -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Unlicense]: https://choosealicense.com/licenses/unlicense/
[LICENSE]: LICENSE
[Prettier]: https://prettier.io/

# `@flerouwu/prettier-config`
The prettier configuration file that I use for all projects that I develop myself. This configuration is licensed under [Unlicense], dedicated to the public domain. See more in [LICENSE].

As of version `2.0.1`, it now provides a CommonJS and ESM configuration file. This way you can either choose to `require()` or `import` the config file.

## Installation
1. Install `prettier` and `@flerouwu/prettier-config` via your package manager. You can also manually copy the config file (not recommended), which is explained in step 2.
	<details>
	<summary>With Yarn</summary>
	
	```ps1
	# Install Dependencies
	yarn add -D prettier @flerouwu/prettier-config@github:flerouwu/prettier-config

	# If using Yarn PNP, you'll need to unplug the config.
	yarn unplug @flerouwu/prettier-config
	```
	</details>

	<details>
	<summary>With PNPM</summary>
	
	```ps1
	pnpm add -D prettier github:flerouwu/prettier-config
	```
	</details>

	<details>
	<summary>With NPM</summary>
	
	```ps1
	npm install --save-dev prettier flerouwu/prettier-config
	```
	</details>

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
		module.exports = {
			// https://github.com/flerouwu/prettier-config
			...require("@flerouwu/prettier-config"),

			// Add your overrides below.
			// ...
		}
		```
		</details>
	
	- Copy contents of `prettier.config.(cjs|mjs)` from the repository to a dedicated file (not recommended).
