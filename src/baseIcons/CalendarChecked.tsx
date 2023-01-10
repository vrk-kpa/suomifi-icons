
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconCalendarChecked as CalendarChecked } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconCalendarChecked = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <CalendarChecked
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

const IconCalendarChecked = (props: BaseIconProps) => {
  return <StyledIconCalendarChecked {...props}/>
}

IconCalendarChecked.displayName = 'Icon';
export { IconCalendarChecked };
