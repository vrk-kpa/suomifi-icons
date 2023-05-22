
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChevronCircleRight as ChevronCircleRight } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChevronCircleRight = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChevronCircleRight
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

const IconChevronCircleRight = (props: BaseIconProps) => {
  return <StyledIconChevronCircleRight {...props}/>
}

IconChevronCircleRight.displayName = 'Icon';
export { IconChevronCircleRight };
