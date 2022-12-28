
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as CheckSelected } from '../../assets/baseIcons/icon-check-selected.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconCheckSelected = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <CheckSelected
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

IconCheckSelected.displayName = 'Icon';
export { IconCheckSelected };
