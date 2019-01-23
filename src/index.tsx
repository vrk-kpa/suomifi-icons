import React from 'react';
import { IconKeys, icons } from './icons';
export { IconKeys } from './icons';

const fallbackIcon = 'login';

function objValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const getIcon = (icon: IconKeys) => {
  const suomifiIcon = objValue(icons, icon);
  return !!suomifiIcon ? suomifiIcon : objValue(icons, fallbackIcon);
};

export interface SuomifiIconInterface {
  icon: IconKeys;
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
