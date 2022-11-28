
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as RadioButton } from '../../assets/componentIcons/icon-radio-button.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconRadioButton = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
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

IconRadioButton.displayName = 'Icon';
export { IconRadioButton };
