
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMessageUnread as MessageUnread } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMessageUnread = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MessageUnread
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

const IconMessageUnread = (props: BaseIconProps) => {
  return <StyledIconMessageUnread {...props}/>
}

IconMessageUnread.displayName = 'Icon';
export { IconMessageUnread };
