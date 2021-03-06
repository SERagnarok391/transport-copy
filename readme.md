# TransportCopy.com

This is the site source.

## Building the site

1. Install Node 8+ (I recommend using [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows))
2. Install [Hugo](https://gohugo.io/)
3. Install [Yarn](https://yarnpkg.com/en/)
4. Run `yarn install` in the repo root to install dependencies
5. Run `yarn start`
6. Visit http://localhost:1313

To build for production, run `yarn build`. The rendered site will be in the public/ dir.

See other scripts in package.json.

## Recommended dev environment

VS Code (this will use the workspace settings defined in .vscode/settings.json) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) extensions installed. Linting and formatting will automatically run with a git hook, but these give you faster feedback.
