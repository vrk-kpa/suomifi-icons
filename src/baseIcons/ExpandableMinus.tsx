
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconExpandableMinus as ExpandableMinus } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconExpandableMinus = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ExpandableMinus
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

const IconExpandableMinus = (props: BaseIconProps) => {
  return <StyledIconExpandableMinus {...props}/>
}

IconExpandableMinus.displayName = 'Icon';
export { IconExpandableMinus };
