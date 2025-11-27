
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconHourglass as Hourglass } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconHourglass = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <Hourglass
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

const IconHourglass = (props: BaseIconProps) => {
  return <StyledIconHourglass {...props}/>
}

IconHourglass.displayName = 'Icon';
export { IconHourglass };
