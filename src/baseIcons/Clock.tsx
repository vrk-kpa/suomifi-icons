
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Clock from '../../assets/baseIcons/icon-clock.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconClock = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Clock
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${baseIconStyles}
`;

IconClock.displayName = 'Icon';
export { IconClock };
