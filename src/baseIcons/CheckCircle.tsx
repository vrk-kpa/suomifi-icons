
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconCheckCircle as CheckCircle } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconCheckCircle = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <CheckCircle
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

const IconCheckCircle = (props: BaseIconProps) => {
  return <StyledIconCheckCircle {...props}/>
}

IconCheckCircle.displayName = 'Icon';
export { IconCheckCircle };
