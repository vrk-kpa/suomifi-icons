/// <reference path='../typings/index.d.ts' />
import React from 'react';
import { IconKeys, icons } from './icons';
import { SvgrComponent } from '*.svg';
import {
  StaticIconKeys,
  staticIcons,
  DoctypeIconKeys,
  doctypeIcons
} from './staticIcons';
export { IconKeys } from './icons';
export { StaticIconKeys, DoctypeIconKeys } from './staticIcons';

const fallbackIcon = 'login';

function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const getIcon = (icon: IconKeys | StaticIconKeys | DoctypeIconKeys) => {
  const suomifiIcon =
    icon in icons
      ? objValue(icons, icon as IconKeys)
      : icon in staticIcons
      ? objValue(staticIcons, icon as StaticIconKeys)
      : objValue(doctypeIcons, icon as DoctypeIconKeys);
  return !!suomifiIcon ? suomifiIcon : objValue(icons, fallbackIcon);
};

export const allIcons = Object.keys(icons);
export const allStaticIcons = Object.keys(staticIcons);
export const allDoctypeIcons = Object.keys(doctypeIcons);

export interface SuomifiIconInterface {
  icon: IconKeys | StaticIconKeys | DoctypeIconKeys;
  color?: string;
  fill?: string;
  className?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

export class SuomifiIcon extends React.Component<SuomifiIconInterface> {
  render() {
    const { icon, color, fill: origFill, ...passProps } = this.props;
    const fill = !!origFill ? origFill : color;
    const fillProp =
      !(icon in staticIcons || icon in doctypeIcons) && !!fill
        ? { fill: fill }
        : {};
    const Svg = getIcon(icon) as SvgrComponent;
    return <Svg {...passProps} {...fillProp} />;
  }
}
