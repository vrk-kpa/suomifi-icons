
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconOptionsVertical as OptionsVertical } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconOptionsVertical = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <OptionsVertical
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

const IconOptionsVertical = (props: BaseIconProps) => {
  return <StyledIconOptionsVertical {...props}/>
}

IconOptionsVertical.displayName = 'Icon';
export { IconOptionsVertical };
