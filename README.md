# <img src="https://avatars0.githubusercontent.com/u/11345641?s=88&v=4" alt="DVV" width="18"/> suomifi-icons

Suomi.fi icons as accessible React components.

The library consists of five icon categories:

- Base icons
- Illustrative icons
- Doctype icons
- Component icons
- Logo icons

## Usage

The icons can be used simply by importing the desired icon components and using them in your code like any other React component.

```js
import { IconArchive } from 'suomifi-icons';

<IconArchive color="green" mousePointer />;
```

Different icon categories have slightly varying APIs based on their intended use and styling possibilities:

### Base icons API

Base icons are the most commonly used icon set. Their color and size can be customized via props. By default the color value is set to `currentColor`, so the icons inherit the current font color.

| Property     | Property type | Description                                                         |
| ------------ | ------------- | ------------------------------------------------------------------- |
| className    | `string`      | Custom classname to extend or customize                             |
| ariaLabel    | `string`      | Aria-label for SVG, undefined hides SVG from screen reader          |
| mousePointer | `boolean`     | Show mouse cursor as hand-pointer                                   |
| color        | `string`      | Custom fill color                                                   |
| fill         | `string`      | Custom fill color, takes precedence over color if both are provided |

---

### Illustrative icons API

Illustrative icons are 2-color icons that can be customized to fit the required color scheme.

| Property       | Property type | Description                                                |
| -------------- | ------------- | ---------------------------------------------------------- |
| className      | `string`      | Custom classname to extend or customize                    |
| ariaLabel      | `string`      | Aria-label for SVG, undefined hides SVG from screen reader |
| mousePointer   | `boolean`     | Show mouse cursor as hand-pointer                          |
| baseColor      | `string`      | Custom base color                                          |
| highlightColor | `string`      | Custom highlight color                                     |

---

### Logo icons API

Logo icons contains variations of the Suomi.fi logo.They offer only limited customisation options.

| Property     | Property type | Description                                                |
| ------------ | ------------- | ---------------------------------------------------------- |
| className    | `string`      | Custom classname to extend or customize                    |
| ariaLabel    | `string`      | Aria-label for SVG, undefined hides SVG from screen reader |
| mousePointer | `boolean`     | Show mouse cursor as hand-pointer                          |

### Doctype icons API

Doctype icons portray different document types.

| Property     | Property type | Description                                                |
| ------------ | ------------- | ---------------------------------------------------------- |
| className    | `string`      | Custom classname to extend or customize                    |
| ariaLabel    | `string`      | Aria-label for SVG, undefined hides SVG from screen reader |
| mousePointer | `boolean`     | Show mouse cursor as hand-pointer                          |

## Versioning

This repository uses semantic versioning (https://semver.org/).

- **Major**: Changes to the APIs or changes that result in visible changes in the existing icons.
- **Minor**: Addition of new icons, or other non-breaking changes.
- **Patch**: Any other changes that don't affect how the components are or can be used.


```bash
npm install suomifi-icons
```
or
```bash
yarn add suomifi-icons
```

## ⌨️ Development

See <a href="./DEVELOPMENT.md">DEVELOPMENT.md</a>.
