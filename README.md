# <img src="https://avatars0.githubusercontent.com/u/11345641?s=88&v=4" alt="VRK" width="18"/> suomifi-icons

Offers suomi.fi-styleguide icons as React-components. **This library does not take responsibility of accessibility, component passes given attributes to the SVG-element.**

This repository uses semantic versioning (https://semver.org/).

```bash
yarn add suomifi-icons
```

## ⌨️ Development

Use `yarn link` for development usage

## Importing specific icons

To make tree shaking more easier, it's possible to import a specific icon. If you use the `SuomifiIcon*` components that accept the icon type as a string, the final bundle will include all icons (even those that you don't use) as that component can't be tree-shaken. Example use of importing a specific icon:

```ts
import IconClose from 'suomifi-icons/base/IconClose';

function Component() {
  return <IconClose fill="red" />;
}
```

The default-exported icon components accept the same properties as `<svg>` does.
