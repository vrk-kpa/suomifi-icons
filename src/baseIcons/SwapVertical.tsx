
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconSwapVertical as SwapVertical } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconSwapVertical = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <SwapVertical
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

const IconSwapVertical = (props: BaseIconProps) => {
  return <StyledIconSwapVertical {...props}/>
}

IconSwapVertical.displayName = 'Icon';
export { IconSwapVertical };
