
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as Toggle } from '../../assets/componentIcons/icon-toggle.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconToggle = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Toggle
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

IconToggle.displayName = 'Icon';
export { IconToggle };
