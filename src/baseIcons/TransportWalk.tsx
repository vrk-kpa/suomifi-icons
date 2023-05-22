
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconTransportWalk as TransportWalk } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconTransportWalk = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <TransportWalk
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

const IconTransportWalk = (props: BaseIconProps) => {
  return <StyledIconTransportWalk {...props}/>
}

IconTransportWalk.displayName = 'Icon';
export { IconTransportWalk };
