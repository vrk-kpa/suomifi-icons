
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconRadioButtonLarge as RadioButtonLarge } from '../../svgrComponents/componentIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconRadioButtonLarge = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <RadioButtonLarge
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

const IconRadioButtonLarge = (props: StaticIconProps) => {
  return <StyledIconRadioButtonLarge {...props}/>
}

IconRadioButtonLarge.displayName = 'Icon';
export { IconRadioButtonLarge };
