# <img src="./assets/logoIcons/icon-horizontal.svg" alt="DVV" width="100"/> icons

## Adding new icons

1. Add the new icon file(s) under the correct folder under `assets`
2. Add the icon name in the correct array in `utils/createComponents`.
3. Run `yarn generate` to regenerate all icon components. The new icon will be included in the correct iconset and the corresponding index.
4. Build and publish as minor version upgrade

## Making changes to the icons

The icon components are built by the `createComponents.js` script, so making changes to the component structure is done there. Make necessary adjustments to the component template found in the script, run `yarn` generate, check the generated components for any errors or warnings and finally build and publish as a major version upgrade.

## The build process

The build process is somewhat complicated due to many moving parts, but here it is in a nutshell:

1. Rollup uses all icon component files as separate inputs to allow for a clean folder structure in the output
2. It builds both esm and cjs builds under the icon type folders
3. During the build SVGR does its thing building the icon `.svg` files into simple React components used by the actual icon components. Different SVGO configs are given by icon type to apply class names to the internal parts of the `.svg` content to allow for flexible styling later on.
4. After the build the `frank.js` script is ran to generate separate `package.json` files for the `dist` folder as well as the icon type folders, in practice generating "sub-packages".
5. Finally the typings are moved under the corresponding icon type folders

## Publishing

IMPORTANT! Make sure to publish the `dist` folder, not the root, as in `npm publish ./dist`

## Semantic versioning

See README.md for information of how semantic versioning is applied here
