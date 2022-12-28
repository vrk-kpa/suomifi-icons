const fs = require('fs');
const path = require('path');

const toKebabCase = (source) => {
  return source
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

const baseIcons = [
  'Alert',
  'AlertOff',
  'Archive',
  'ArrowUp',
  'ArrowRight',
  'ArrowDown',
  'ArrowLeft',
  'ArrowheadDown',
  'ArrowheadUp',
  'Attachment',
  'Authorise',
  'Basket',
  'BasketAdd',
  'Calendar',
  'CalendarChecked',
  'Chat',
  'ChatHeart',
  'ChatQuestion',
  'Check',
  'CheckCircleFilled',
  'CheckCircle',
  'CheckSelected',
  'ChevronUp',
  'ChevronRight',
  'ChevronDown',
  'ChevronLeft',
  'ChevronCircleUp',
  'ChevronCircleRight',
  'ChevronCircleDown',
  'ChevronCircleLeft',
  'Clock',
  'Close',
  'Compare',
  'CompareRemove',
  'ControlPrevious',
  'ControlPlay',
  'ControlNext',
  'Copy',
  'Disabled',
  'Download',
  'Edit',
  'ErrorFilled',
  'Error',
  'ExpandableMinus',
  'ExpandablePlus',
  'FileGeneric',
  'HeartFilled',
  'Heart',
  'HelpFilled',
  'Help',
  'Hint',
  'History',
  'Image',
  'InfoFilled',
  'Info',
  'Internet',
  'ISA',
  'LinkBreadcrumb',
  'LinkExternal',
  'LinkList',
  'ListBulleted',
  'ListNumbered',
  'Login',
  'Logout',
  'MailSend',
  'MapLayers',
  'MapLocationFilled',
  'MapLocation',
  'MapMyLocation',
  'MapRoute',
  'Map',
  'Menu',
  'Message',
  'Minus',
  'Peek',
  'Pin',
  'Phone',
  'Plus',
  'Preview',
  'Print',
  'RadioButtonOn',
  'Refresh',
  'Registers',
  'Remove',
  'Reply',
  'Save',
  'Search',
  'Settings',
  'SignLanguageContent',
  'Star',
  'StarFilled',
  'SubDirectory',
  'SwapRounded',
  'SwapVertical',
  'TransportBicycle',
  'TransportBus',
  'TransportCar',
  'TransportWalk',
  'Upload',
  'Warning'
];

const componentIcons = [
  'RadioButton',
  'RadioButtonLarge',
  'Toggle',
  'Preloader'
];

const doctypeIcons = ['Doc', 'GenericFile', 'Pdf', 'Ppt', 'Xls', 'Xml'];

const illustrativeIcons = [
  'Archive',
  'Authorisation',
  'Book',
  'Briefcase',
  'BuildingAdministrative',
  'Buildings',
  'Catalog',
  'ChartAnalytics',
  'ChartPie',
  'ChartScreen',
  'ChartStatistic',
  'ChatBubbles',
  'Child',
  'Collaboration',
  'Contract',
  'Conversation',
  'Court',
  'CreditCards',
  'Database',
  'Display',
  'Doctor',
  'Environment',
  'Exchange',
  'Failure',
  'Family',
  'Faq',
  'Feedback',
  'Finance',
  'Folder',
  'Global',
  'Group',
  'Growth',
  'HandCoins',
  'HandPlate',
  'Helpdesk',
  'Home',
  'House',
  'IdBadge',
  'LaptopContent',
  'Laptop',
  'Leap',
  'MagicWand',
  'Mailbox',
  'ManButtons',
  'ManGlasses',
  'ManLaptop',
  'Map',
  'MessageSent',
  'Messages',
  'Meter',
  'MigrationFinland',
  'Money',
  'MoneyBag',
  'Organisation',
  'PhoneText',
  'Phone',
  'PiggyBank',
  'Pillar',
  'PlaneFlying',
  'Presentation',
  'Puzzle',
  'Registers',
  'Rocket',
  'ScaleBalance',
  'Scale',
  'Server',
  'Settings',
  'Shelter',
  'Shop',
  'Smartwatch',
  'SocialSecurity',
  'Steering',
  'Success',
  'Support',
  'Swim',
  'TabletText',
  'Tablet',
  'Team',
  'Touch',
  'Train',
  'UserBadge',
  'UserProfile',
  'WebDevelopment',
  'WebService',
  'WomanButtons',
  'WomanNecklace'
];

const logoIcons = [
  'Horizontal',
  'HorizontalInvert',
  'Vertical',
  'VerticalInvert'
];

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];

const buildcontent = (
  componentName,
  iconType,
  iconFile,
  iconName,
  interface,
  styles
) => {
  return `
import React from \'react\';
import { default as styled } from \'styled-components\';
import classnames from \'classnames\';
import { ReactComponent as ${componentName} } from \'../../assets/${iconType}Icons/${iconFile}.svg\';
import { ${styles} } from \'../utils/styles\';
import { ${interface} } from \'./iconInterface\';
import { baseClassName, cursorPointerClassName } from \'../utils/classes\';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from \'../utils/aria\';

const ${iconName} = styled((props: ${interface}) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
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
      console.log(`Could not move interface to ${iconType}Icons`);
      return console.error(err);
    }
  });
};

// Create icons under corresponding icon type folders
const createIcons = () => {
  iconTypes.forEach((type) => {
    const iconSet = getIconSet(type);
    try {
      iconSet.forEach((icon) => {
        const iconFile =
          type === 'illustrative'
            ? `icon-illustration-${toKebabCase(icon)}`
            : `icon-${toKebabCase(icon)}`;
        const componentName = `${icon}`;
        const iconName = `Icon${icon}`;
        const interface = getInterface(type);
        const styles = getStyles(type);
        try {
          // Create icon component
          fs.writeFileSync(
            `src/${type}Icons/${icon}.tsx`,
            buildcontent(
              componentName,
              type,
              iconFile,
              iconName,
              interface,
              styles
            )
          );
          // Add the component export to the corresponding index file
          fs.appendFileSync(
            `src/${type}Icons/index.ts`,
            `export { Icon${icon} } from './${icon}';\n`
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
    fs.appendFileSync(
      `src/${type}Icons/index.ts`,
      `export type { ${getInterface(type)} } from './iconInterface';\n`
    );
  });
};

createFolders();
createIcons();
