
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconBehalfOfAPerson as BehalfOfAPerson } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconBehalfOfAPerson = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <BehalfOfAPerson
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

const IconBehalfOfAPerson = (props: StaticIconProps) => {
  return <StyledIconBehalfOfAPerson {...props}/>
}

IconBehalfOfAPerson.displayName = 'Icon';
export { IconBehalfOfAPerson };
