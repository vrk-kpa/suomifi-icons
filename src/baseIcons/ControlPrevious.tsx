
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconControlPrevious as ControlPrevious } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconControlPrevious = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ControlPrevious
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

const IconControlPrevious = (props: BaseIconProps) => {
  return <StyledIconControlPrevious {...props}/>
}

IconControlPrevious.displayName = 'Icon';
export { IconControlPrevious };
