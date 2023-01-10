
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconBasketAdd as BasketAdd } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconBasketAdd = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <BasketAdd
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

const IconBasketAdd = (props: BaseIconProps) => {
  return <StyledIconBasketAdd {...props}/>
}

IconBasketAdd.displayName = 'Icon';
export { IconBasketAdd };
