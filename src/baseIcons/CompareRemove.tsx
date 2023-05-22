
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconCompareRemove as CompareRemove } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconCompareRemove = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <CompareRemove
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

const IconCompareRemove = (props: BaseIconProps) => {
  return <StyledIconCompareRemove {...props}/>
}

IconCompareRemove.displayName = 'Icon';
export { IconCompareRemove };
