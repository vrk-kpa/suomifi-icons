# <img src="./assets/logoIcons/icon-horizontal.svg" alt="DVV" width="100"/> icons

## Adding new icons

1. Add the new icon file(s) under the correct folder under `assets`
2. Add the icon name in the correct array in `src/IconLists`.
3. Run `yarn svgr` to generate the underlying icon components.
4. Run `yarn generate` to regenerate the icon components with added logic. The new icon will be included in the correct iconset and the corresponding index.
5. Build and publish as minor version upgrade

## Making changes to the icons

The icon components are built by the `createComponents.js` script, so making changes to the component structure is done there. Make necessary adjustments to the component template found in the script, run `yarn generate`, check the generated components for any errors or warnings and finally build and publish as a major version upgrade.

## Publishing

**IMPORTANT!** Make sure to publish the `dist` folder instead of the root, as in `npm publish ./dist`

## Semantic versioning

See README.md for information of how semantic versioning is applied.

## Warnings

The default export warning during build is a known issue. It is due to the fact that SVGR CLI doesn't support named exports option unlike the regular version, and due to requirements of the library, we currently have to use the CLI. It seems to have no effect in regards of using the library.
