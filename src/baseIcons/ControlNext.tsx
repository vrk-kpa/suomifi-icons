
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as ControlNext } from '../../assets/baseIcons/icon-control-next.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconControlNext = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <ControlNext
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

IconControlNext.displayName = 'Icon';
export { IconControlNext };
