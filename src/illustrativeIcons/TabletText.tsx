
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconTabletText as TabletText } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconTabletText = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <TabletText
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

const IconTabletText = (props: StaticIconProps) => {
  return <StyledIconTabletText {...props}/>
}

IconTabletText.displayName = 'Icon';
export { IconTabletText };
