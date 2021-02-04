import React, { CSSProperties } from 'react';
import { BaseIconKeys, baseIcons as origBaseIcons } from './baseIcons';
import {
  IllustrativeIconKeys,
  illustrativeIcons as origIllustrativeIcons
} from './illustrativeIcons';
import {
  DoctypeIconKeys,
  doctypeIcons as origDoctypeIcons
} from './doctypeIcons';
import {
  ComponentIconKeys,
  componentIcons as origComponentIcons
} from './componentIcons';

export { BaseIconKeys } from './baseIcons';
export { IllustrativeIconKeys } from './illustrativeIcons';
export { DoctypeIconKeys } from './doctypeIcons';
export { ComponentIconKeys } from './componentIcons';

export const baseIcons = Object.keys(origBaseIcons);
export const illustrativeIcons = Object.keys(origIllustrativeIcons);
export const doctypeIcons = Object.keys(origDoctypeIcons);
export const componentIcons = Object.keys(origComponentIcons);

const fallbackIcon = 'login';
const fallbackStaticIcon = 'authorisation';
const fallbackComponentIcon = 'toggleOff';

function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

interface FillPropsInterface {
  /** Custom fill color */
  color?: string;
  /** Custom fill color, takes precedence over color if both are provided */
  fill?: string;
}

function fillProp<T extends FillPropsInterface>(props: T): CSSProperties {
  const { color, fill: origFill } = props;
  const fill = !!origFill ? origFill : color;
  return !!fill ? { fill: fill } : {};
}

interface SuomifiIconBaseInterface<T> {
  /** Icon name */
  icon: T;
  /** Custom classname to extend or customize */
  className?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

export interface SuomifiIconInterface
  extends SuomifiIconBaseInterface<BaseIconKeys>,
    FillPropsInterface {}

export class SuomifiIcon extends React.Component<SuomifiIconInterface> {
  render() {
    const { icon, color, fill, ...passProps } = this.props;
    const Svg = (!!(icon in origBaseIcons)
      ? objValue(origBaseIcons, icon as BaseIconKeys)
      : objValue(origBaseIcons, fallbackIcon)) as any;
    return <Svg {...passProps} {...fillProp(this.props)} />;
  }
}

export interface SuomifiStaticIconInterface
  extends SuomifiIconBaseInterface<IllustrativeIconKeys | DoctypeIconKeys> {}

export class SuomifiStaticIcon extends React.Component<SuomifiStaticIconInterface> {
  render() {
    const { icon, fill, color, ...passProps } = this.props;
    const Svg = (icon in origIllustrativeIcons
      ? objValue(origIllustrativeIcons, icon as IllustrativeIconKeys)
      : icon in origDoctypeIcons
      ? objValue(origDoctypeIcons, icon as DoctypeIconKeys)
      : objValue(origIllustrativeIcons, fallbackStaticIcon)) as any;
    return <Svg {...passProps} />;
  }
}

export interface SuomifiComponentIconInterface
  extends SuomifiIconBaseInterface<ComponentIconKeys> {}

export class SuomifiComponentIcon extends React.Component<SuomifiComponentIconInterface> {
  render() {
    const { icon, ...passProps } = this.props;
    const Svg = (!!(icon in origComponentIcons)
      ? objValue(origComponentIcons, icon as ComponentIconKeys)
      : objValue(origComponentIcons, fallbackComponentIcon)) as any;
    return <Svg {...passProps} />;
  }
}
