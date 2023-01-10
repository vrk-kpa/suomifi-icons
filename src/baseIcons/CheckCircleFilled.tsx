
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconCheckCircleFilled as CheckCircleFilled } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconCheckCircleFilled = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <CheckCircleFilled
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

const IconCheckCircleFilled = (props: BaseIconProps) => {
  return <StyledIconCheckCircleFilled {...props}/>
}

IconCheckCircleFilled.displayName = 'Icon';
export { IconCheckCircleFilled };
