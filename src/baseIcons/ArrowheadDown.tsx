
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconArrowheadDown as ArrowheadDown } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconArrowheadDown = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ArrowheadDown
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

const IconArrowheadDown = (props: BaseIconProps) => {
  return <StyledIconArrowheadDown {...props}/>
}

IconArrowheadDown.displayName = 'Icon';
export { IconArrowheadDown };
