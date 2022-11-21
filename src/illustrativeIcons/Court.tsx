
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Court from '../../assets/illustrativeIcons/icon-illustration-court.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconCourt = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Court
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

IconCourt.displayName = 'Icon';
export { IconCourt };
