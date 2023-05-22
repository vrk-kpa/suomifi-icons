const fs = require('fs');
const path = require('path');
const { baseIcons } = require('./src/IconLists');
const { componentIcons } = require('./src/IconLists');
const { doctypeIcons } = require('./src/IconLists');
const { illustrativeIcons } = require('./src/IconLists');
const { logoIcons } = require('./src/IconLists');

const toKebabCase = (source) => {
  return source
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];

const buildcontent = (componentName, iconType, iconName, interface, styles) => {
  return `
import React from \'react\';
import { default as styled } from \'styled-components\';
import classnames from \'classnames\';
import { ${iconName} as ${componentName} } from \'../../svgrComponents/${iconType}Icons/';
import { ${styles} } from \'../utils/styles\';
import { ${interface} } from \'./iconInterface\';
import { baseClassName, cursorPointerClassName } from \'../utils/classes\';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from \'../utils/aria\';

const Styled${iconName} = styled((props: ${interface}) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <${componentName}
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})\`
  \${${styles}}
\`;

const ${iconName} = (props: ${interface}) => {
  return <Styled${iconName} {...props}/>
}

${iconName}.displayName = \'Icon\';
export { ${iconName} };
`;
};

const createFolders = () => {
  try {
    iconTypes.forEach((type) => {
      fs.mkdirSync(`src/${type}Icons`, { recursive: true });
    });
  } catch (error) {
    console.error(error);
  }
};

const getIconSet = (iconType) => {
  switch (iconType) {
    case 'base':
      return baseIcons;
    case 'illustrative':
      return illustrativeIcons;
    case 'component':
      return componentIcons;
    case 'doctype':
      return doctypeIcons;
    case 'logo':
      return logoIcons;
    default:
      return [];
  }
};

const getInterface = (iconType) => {
  if (
    iconType === 'illustrative' ||
    iconType === 'component' ||
    iconType === 'doctype'
  )
    return 'StaticIconProps';
  if (iconType === 'logo') return 'LogoIconProps';
  return 'BaseIconProps';
};

const getStyles = (iconType) => {
  if (
    iconType === 'illustrative' ||
    iconType === 'component' ||
    iconType === 'doctype'
  )
    return 'staticIconStyles';
  if (iconType === 'logo') return 'logoIconStyles';
  return 'baseIconStyles';
};

const copyInterface = (iconType) => {
  const currentPath = path.join(__dirname, `src/utils/iconInterface.ts`);
  const destinationPath = path.join(
    __dirname,
    `src/${iconType}Icons/iconInterface.ts`
  );
  fs.copyFile(currentPath, destinationPath, (err) => {
    if (err) {
      console.log(`Could not copy interface to ${iconType}Icons`);
      return console.error(err);
    }
  });
};

const addInterfaceExports = () => {
  try {
    fs.appendFileSync(
      `src/index.ts`,
      `export type { BaseIconProps, StaticIconProps, LogoIconProps } from './utils/iconInterface';\n`
    );
  } catch (error) {
    console.error(error);
  }
};

const addIconListExports = () => {
  try {
    fs.appendFileSync(
      `src/index.ts`,
      `export { baseIcons, illustrativeIcons, doctypeIcons, componentIcons, logoIcons } from './IconLists';\n`
    );
  } catch (error) {
    console.error(error);
  }
};

// Create icons under corresponding icon type folders
const createIcons = () => {
  iconTypes.forEach((type) => {
    const iconSet = getIconSet(type);
    try {
      iconSet.forEach((icon) => {
        const componentName = `${icon}`;
        const iconName = `Icon${icon}`;
        const interface = getInterface(type);
        const styles = getStyles(type);
        try {
          // Create icon component
          fs.writeFileSync(
            `src/${type}Icons/${icon}.tsx`,
            buildcontent(componentName, type, iconName, interface, styles)
          );
          // Add the component export to the corresponding index file
          fs.appendFileSync(
            `src/${type}Icons/index.ts`,
            `export { ${iconName} } from './${icon}';\n`
          );
          fs.appendFileSync(
            `src/index.ts`,
            `export { ${iconName} } from './${type}Icons/';\n`
          );
        } catch (error) {
          console.error(`Error creating ${icon} icon: `, error);
        }
      });
      // Copy the interface file under the icon type folder
      copyInterface(type);
    } catch (error) {
      console.error(`Error generating ${type}Icon files: `, error);
    }
  });
};

createFolders();
createIcons();
addInterfaceExports();
addIconListExports();
