
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMobileText as MobileText } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMobileText = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MobileText
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

const IconMobileText = (props: StaticIconProps) => {
  return <StyledIconMobileText {...props}/>
}

IconMobileText.displayName = 'Icon';
export { IconMobileText };
