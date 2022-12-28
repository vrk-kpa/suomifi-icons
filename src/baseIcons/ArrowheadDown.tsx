
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as ArrowheadDown } from '../../assets/baseIcons/icon-arrowhead-down.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconArrowheadDown = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
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

IconArrowheadDown.displayName = 'Icon';
export { IconArrowheadDown };
