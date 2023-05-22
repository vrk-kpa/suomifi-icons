
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconPlaneFlying as PlaneFlying } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconPlaneFlying = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <PlaneFlying
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${staticIconStyles}
`;

const IconPlaneFlying = (props: StaticIconProps) => {
  return <StyledIconPlaneFlying {...props}/>
}

IconPlaneFlying.displayName = 'Icon';
export { IconPlaneFlying };
