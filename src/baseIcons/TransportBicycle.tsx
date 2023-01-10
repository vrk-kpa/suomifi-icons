
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconTransportBicycle as TransportBicycle } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconTransportBicycle = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <TransportBicycle
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

const IconTransportBicycle = (props: BaseIconProps) => {
  return <StyledIconTransportBicycle {...props}/>
}

IconTransportBicycle.displayName = 'Icon';
export { IconTransportBicycle };
