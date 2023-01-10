
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconExpandablePlus as ExpandablePlus } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconExpandablePlus = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ExpandablePlus
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

const IconExpandablePlus = (props: BaseIconProps) => {
  return <StyledIconExpandablePlus {...props}/>
}

IconExpandablePlus.displayName = 'Icon';
export { IconExpandablePlus };
