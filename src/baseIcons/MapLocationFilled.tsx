
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMapLocationFilled as MapLocationFilled } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMapLocationFilled = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MapLocationFilled
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

const IconMapLocationFilled = (props: BaseIconProps) => {
  return <StyledIconMapLocationFilled {...props}/>
}

IconMapLocationFilled.displayName = 'Icon';
export { IconMapLocationFilled };
