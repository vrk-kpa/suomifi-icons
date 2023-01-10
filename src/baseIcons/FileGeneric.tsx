
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconFileGeneric as FileGeneric } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconFileGeneric = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <FileGeneric
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

const IconFileGeneric = (props: BaseIconProps) => {
  return <StyledIconFileGeneric {...props}/>
}

IconFileGeneric.displayName = 'Icon';
export { IconFileGeneric };
