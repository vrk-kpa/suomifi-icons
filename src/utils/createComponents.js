const fs = require('fs');

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
  'ArrowRight'
  // 'ArrowDown',
  // 'ArrowLeft',
  // 'ArrowheadDown',
  // 'ArrowheadUp',
  // 'Attachment',
  // 'Authorise',
  // 'Basket',
  // 'BasketAdd',
  // 'Calendar',
  // 'CalendarChecked',
  // 'Chat',
  // 'ChatHeart',
  // 'ChatQuestion',
  // 'Check',
  // 'CheckCircleFilled',
  // 'CheckCircle',
  // 'CheckSelected',
  // 'ChevronUp',
  // 'ChevronRight',
  // 'ChevronDown',
  // 'ChevronLeft',
  // 'ChevronCircleUp',
  // 'ChevronCircleRight',
  // 'ChevronCircleDown',
  // 'ChevronCircleLeft',
  // 'Clock',
  // 'Close',
  // 'Compare',
  // 'CompareRemove',
  // 'ControlPrevious',
  // 'ControlPlay',
  // 'ControlNext',
  // 'Copy',
  // 'Disabled',
  // 'Download',
  // 'Edit',
  // 'ErrorFilled',
  // 'Error',
  // 'ExpandableMinus',
  // 'ExpandablePlus',
  // 'FileGeneric',
  // 'HeartFilled',
  // 'Heart',
  // 'HelpFilled',
  // 'Help',
  // 'Hint',
  // 'History',
  // 'Image',
  // 'InfoFilled',
  // 'Info',
  // 'Internet',
  // 'ISA',
  // 'LinkBreadcrumb',
  // 'LinkExternal',
  // 'LinkList',
  // 'ListBulleted',
  // 'ListNumbered',
  // 'Login',
  // 'Logout',
  // 'MailSend',
  // 'MapLayers',
  // 'MapLocationFilled',
  // 'MapLocation',
  // 'MapMyLocation',
  // 'MapRoute',
  // 'Map',
  // 'Menu',
  // 'Message',
  // 'Minus',
  // 'Peek',
  // 'Pin',
  // 'Phone',
  // 'Plus',
  // 'Preview',
  // 'Print',
  // 'RadioButtonOn',
  // 'Refresh',
  // 'Registers',
  // 'Remove',
  // 'Reply',
  // 'Save',
  // 'Search',
  // 'Settings',
  // 'SignLanguageContent',
  // 'Star',
  // 'StarFilled',
  // 'SubDirectory',
  // 'SwapRounded',
  // 'SwapVertical',
  // 'TransportBicycle',
  // 'TransportBus',
  // 'TransportCar',
  // 'TransportWalk',
  // 'Upload',
  // 'Warning'
];

const baseIconFileNames = baseIcons.map((icon) => {
  return toKebabCase(icon);
});

const iconTypes = ['base', 'component', 'doctype', 'illustrative', 'logo'];

const buildcontent = (componentName, iconType, iconFile, iconName) => {
  return `
import React from \'react\';
import { default as styled } from \'styled-components\';
import classnames from \'classnames\';
import ${componentName} from \'../../assets/${iconType}Icons/${iconFile}.svg\';
import { iconStyles } from \'../utils/styles\';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from \'../utils/aria\';

const baseClassName = \'fi-icon\';
const cursorPointerClassName = (baseClassName + '--cursor-pointer');

interface SuomifiIconProps {
  /** Custom classname to extend or customize */
  className?: string;
  /** Aria-label for SVG, undefined hides SVG from screen reader
   * @default undefined
   */
  ariaLabel?: string;
  /** Show mouse cursor as hand-pointer */
  mousePointer?: boolean;
  /** Custom fill color */
  color?: string;
  /** Custom fill color, takes precedence over color if both are provided */
  fill?: string;
  testId?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

const ${iconName} = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
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
  \${({ color, fill }) => iconStyles({ color, fill })}
\`;

${iconName}.displayName = \'Icon\';
export default ${iconName};
`;
};

const createFolders = () => {
  try {
    iconTypes.forEach((type) => {
      fs.mkdirSync(`src/test/${type}`, { recursive: true });
    });
  } catch (error) {
    console.error(error);
  }
};

const createBaseIcons = () => {
  try {
    baseIcons.forEach((icon) => {
      const iconType = 'base';
      const iconFile = toKebabCase(icon);
      const componentName = `Icon${icon}`;
      fs.writeFileSync(
        `src/test/${iconType}/${icon}.tsx`,
        buildcontent(componentName, iconType, iconFile, icon)
      );
    });
  } catch (err) {
    console.error(err);
  }
};

createFolders();
createBaseIcons();
