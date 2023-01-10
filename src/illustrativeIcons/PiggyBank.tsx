
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconPiggyBank as PiggyBank } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconPiggyBank = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <PiggyBank
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

const IconPiggyBank = (props: StaticIconProps) => {
  return <StyledIconPiggyBank {...props}/>
}

IconPiggyBank.displayName = 'Icon';
export { IconPiggyBank };
