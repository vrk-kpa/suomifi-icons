
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconUserBadge as UserBadge } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconUserBadge = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <UserBadge
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

const IconUserBadge = (props: StaticIconProps) => {
  return <StyledIconUserBadge {...props}/>
}

IconUserBadge.displayName = 'Icon';
export { IconUserBadge };
