
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Preloader from '../../assets/componentIcons/icon-preloader.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconPreloader = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Preloader
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${staticIconStyles}
`;

IconPreloader.displayName = 'Icon';
export { IconPreloader };
