
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconBehalfOfACompany as BehalfOfACompany } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconBehalfOfACompany = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <BehalfOfACompany
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

const IconBehalfOfACompany = (props: StaticIconProps) => {
  return <StyledIconBehalfOfACompany {...props}/>
}

IconBehalfOfACompany.displayName = 'Icon';
export { IconBehalfOfACompany };
