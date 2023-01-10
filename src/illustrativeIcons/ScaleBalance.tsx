
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconScaleBalance as ScaleBalance } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconScaleBalance = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ScaleBalance
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

const IconScaleBalance = (props: StaticIconProps) => {
  return <StyledIconScaleBalance {...props}/>
}

IconScaleBalance.displayName = 'Icon';
export { IconScaleBalance };
