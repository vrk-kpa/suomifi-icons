
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Phone from '../../assets/baseIcons/icon-phone.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconPhone = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Phone
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

IconPhone.displayName = 'Icon';
export { IconPhone };
