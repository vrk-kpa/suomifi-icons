
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChatQuestion as ChatQuestion } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChatQuestion = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChatQuestion
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

const IconChatQuestion = (props: BaseIconProps) => {
  return <StyledIconChatQuestion {...props}/>
}

IconChatQuestion.displayName = 'Icon';
export { IconChatQuestion };
