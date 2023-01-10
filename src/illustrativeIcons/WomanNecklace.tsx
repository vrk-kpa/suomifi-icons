
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconWomanNecklace as WomanNecklace } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconWomanNecklace = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <WomanNecklace
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

const IconWomanNecklace = (props: StaticIconProps) => {
  return <StyledIconWomanNecklace {...props}/>
}

IconWomanNecklace.displayName = 'Icon';
export { IconWomanNecklace };
