
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconArrowheadUp as ArrowheadUp } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconArrowheadUp = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ArrowheadUp
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

const IconArrowheadUp = (props: BaseIconProps) => {
  return <StyledIconArrowheadUp {...props}/>
}

IconArrowheadUp.displayName = 'Icon';
export { IconArrowheadUp };
