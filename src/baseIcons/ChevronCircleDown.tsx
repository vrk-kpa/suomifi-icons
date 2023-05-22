
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChevronCircleDown as ChevronCircleDown } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChevronCircleDown = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChevronCircleDown
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

const IconChevronCircleDown = (props: BaseIconProps) => {
  return <StyledIconChevronCircleDown {...props}/>
}

IconChevronCircleDown.displayName = 'Icon';
export { IconChevronCircleDown };
