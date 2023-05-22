
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconPpt as Ppt } from '../../svgrComponents/doctypeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconPpt = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <Ppt
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

const IconPpt = (props: StaticIconProps) => {
  return <StyledIconPpt {...props}/>
}

IconPpt.displayName = 'Icon';
export { IconPpt };
