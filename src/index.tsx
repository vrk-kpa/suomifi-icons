import React from 'react';
import { IconKeys, icons, StaticIconKeys, staticIcons } from './icons';
export { IconKeys, StaticIconKeys } from './icons';

const fallbackIcon = 'login';

function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const getIcon = (icon: IconKeys | StaticIconKeys) => {
  const suomifiIcon =
    icon in icons
      ? objValue(icons, icon as IconKeys)
      : objValue(staticIcons, icon as StaticIconKeys);
  return !!suomifiIcon ? suomifiIcon : objValue(icons, fallbackIcon);
};

export interface SuomifiIconInterface {
  icon: IconKeys | StaticIconKeys;
  color?: string;
  className?: string;
}

export class SuomifiIcon extends React.Component<SuomifiIconInterface> {
  render() {
    const { icon, color, ...passProps } = this.props;
    const style = !!color ? { fill: color } : {};
    const Svg = getIcon(icon) as SvgrComponent;
    return <Svg {...passProps} style={style} />;
  }
}
