import horizontal from './logoIcons/horizontal.svg';
import horizontalInvert from './logoIcons/horizontalInvert.svg';
import vertical from './logoIcons/vertical.svg';
import verticalInvert from './logoIcons/verticalInvert.svg';

export type LogoIconKeys = keyof typeof logoIcons;

export const logoIcons = {
  horizontal,
  horizontalInvert,
  vertical,
  verticalInvert
};
