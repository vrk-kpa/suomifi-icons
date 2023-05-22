
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChevronCircleLeft as ChevronCircleLeft } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChevronCircleLeft = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChevronCircleLeft
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

const IconChevronCircleLeft = (props: BaseIconProps) => {
  return <StyledIconChevronCircleLeft {...props}/>
}

IconChevronCircleLeft.displayName = 'Icon';
export { IconChevronCircleLeft };
