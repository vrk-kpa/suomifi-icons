# <img src="./assets/logoIcons/icon-horizontal.svg" alt="DVV" width="100"/> icons

## Adding new icons

1. Create a new feature branch for the addition
2. Add the new icon file(s) under the correct folder under `assets`
3. Add the icon name in the correct array in `src/IconLists`.
4. Run `npm run svgr` to generate the underlying icon components.
5. Run `npm run generate` to regenerate the icon components with added logic. The new icon will be included in the correct iconset and the corresponding index.
6. Update package.json to a new minor version
7. Create a pull request and merge the changes to master after review
8. Switch to the master branch and run `npm run build` to remove possible old dist folder and generate a new dist folder
9. Publish newly generated dist folder with `npm publish ./dist`

## Making changes to the icons

The icon components are built by the `createComponents.js` script, so making changes to the component structure is done there. Make necessary adjustments to the component template found in the script, run `npm run generate`, check the generated components for any errors or warnings and finally build and publish as a major version upgrade.

## Publishing

**IMPORTANT!**

1. Run `npm run build` to make sure to generate new dist folder, and
2. publish the `dist` folder instead of the root with `npm publish ./dist`

## Semantic versioning

See README.md for information of how semantic versioning is applied.

## Warnings

The default export warning during build is a known issue. It is due to the fact that SVGR CLI doesn't support named exports option unlike the regular version, and due to requirements of the library, we currently have to use the CLI. It seems to have no effect in regards of using the library.
