import React from 'react';
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
import { LogoIconKeys, logoIcons as origLogoIcons } from './logoIcons';

export { BaseIconKeys } from './baseIcons';
export { IllustrativeIconKeys } from './illustrativeIcons';
export { DoctypeIconKeys } from './doctypeIcons';
export { ComponentIconKeys } from './componentIcons';
export { LogoIconKeys } from './logoIcons';

export const baseIcons = Object.keys(origBaseIcons);
export const illustrativeIcons = Object.keys(origIllustrativeIcons);
export const doctypeIcons = Object.keys(origDoctypeIcons);
export const componentIcons = Object.keys(origComponentIcons);
export const logoIcons = Object.keys(origLogoIcons);

const fallbackIcon = 'login';
const fallbackStaticIcon = 'authorisation';
const fallbackComponentIcon = 'toggle';
const fallbackLogoIcon = 'horizontal';

function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
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
  extends SuomifiIconBaseInterface<BaseIconKeys> {}

export class SuomifiIcon extends React.Component<SuomifiIconInterface> {
  render() {
    const { icon, color, ...passProps } = this.props;
    const Svg = (
      !!(icon in origBaseIcons)
        ? objValue(origBaseIcons, icon as BaseIconKeys)
        : objValue(origBaseIcons, fallbackIcon)
    ) as any;
    return <Svg {...passProps} />;
  }
}

export interface SuomifiStaticIconInterface
  extends SuomifiIconBaseInterface<IllustrativeIconKeys | DoctypeIconKeys> {}

export class SuomifiStaticIcon extends React.Component<SuomifiStaticIconInterface> {
  render() {
    const { icon, fill, color, ...passProps } = this.props;
    const Svg = (
      icon in origIllustrativeIcons
        ? objValue(origIllustrativeIcons, icon as IllustrativeIconKeys)
        : icon in origDoctypeIcons
        ? objValue(origDoctypeIcons, icon as DoctypeIconKeys)
        : objValue(origIllustrativeIcons, fallbackStaticIcon)
    ) as any;
    return <Svg {...passProps} />;
  }
}

export interface SuomifiComponentIconInterface
  extends SuomifiIconBaseInterface<ComponentIconKeys> {}

export class SuomifiComponentIcon extends React.Component<SuomifiComponentIconInterface> {
  render() {
    const { icon, ...passProps } = this.props;
    const Svg = (
      !!(icon in origComponentIcons)
        ? objValue(origComponentIcons, icon as ComponentIconKeys)
        : objValue(origComponentIcons, fallbackComponentIcon)
    ) as any;
    return <Svg {...passProps} />;
  }
}

export interface SuomifiLogoIconInterface
  extends SuomifiIconBaseInterface<LogoIconKeys> {}

export class SuomifiLogoIcon extends React.Component<SuomifiLogoIconInterface> {
  render() {
    const { icon, ...passProps } = this.props;
    const Svg = (
      !!(icon in origLogoIcons)
        ? objValue(origLogoIcons, icon as LogoIconKeys)
        : objValue(origLogoIcons, fallbackLogoIcon)
    ) as any;
    return <Svg {...passProps} />;
  }
}
