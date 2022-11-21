
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Finance from '../../assets/illustrativeIcons/icon-illustration-finance.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconFinance = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Finance
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

IconFinance.displayName = 'Icon';
export { IconFinance };
