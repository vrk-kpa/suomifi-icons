
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconRadioButton as RadioButton } from '../../svgrComponents/componentIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconRadioButton = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <RadioButton
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

const IconRadioButton = (props: StaticIconProps) => {
  return <StyledIconRadioButton {...props}/>
}

IconRadioButton.displayName = 'Icon';
export { IconRadioButton };
