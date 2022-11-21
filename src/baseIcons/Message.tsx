
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Message from '../../assets/baseIcons/icon-message.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconMessage = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Message
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

IconMessage.displayName = 'Icon';
export { IconMessage };
