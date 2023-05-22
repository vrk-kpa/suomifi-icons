
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconRadioButtonOn as RadioButtonOn } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconRadioButtonOn = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <RadioButtonOn
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

const IconRadioButtonOn = (props: BaseIconProps) => {
  return <StyledIconRadioButtonOn {...props}/>
}

IconRadioButtonOn.displayName = 'Icon';
export { IconRadioButtonOn };
