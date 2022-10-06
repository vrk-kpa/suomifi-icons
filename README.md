# <img src="https://avatars0.githubusercontent.com/u/11345641?s=88&v=4" alt="DVV" width="18"/> suomifi-icons

Offers suomi.fi icons as accessible React-components.

Icons should be imported from subfolders e.g. `import { IconAlert } from 'suomifi-icons/baseIcons'`

This repository uses semantic versioning (https://semver.org/), but since it doesn't contain an distinct API of its own, the following rules for versioning are applied:

- **Major**: Changes that result in visible changes in the existing icons or other major changes that affect the way the icons are used from the library.
- **Minor**: Addition of new icons, or non-breaking changes to the inner structure or build configuration
- **Patch**: Any other changes that don't affect the build

```bash
yarn add suomifi-icons
```

# ⌨️ Development

When adding new icons, add the icon to the correct folder under 'assets'. Make sure the new icon follows the same naming policy as existing icons.

Then add the icon name in the correct array in `utils/createComponents`. Run `yarn generate` to rebuild icon components. The new icon will be included in the correct iconset and the corresponding index.

Run `yarn build` to create a production build and publish using `npm publish ./dist` to ensure importing from subfolders works as intended.
