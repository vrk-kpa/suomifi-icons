
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Remove from '../../assets/baseIcons/icon-remove.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconRemove = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Remove
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

IconRemove.displayName = 'Icon';
export { IconRemove };
