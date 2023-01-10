
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconBuildingAdministrative as BuildingAdministrative } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconBuildingAdministrative = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <BuildingAdministrative
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

const IconBuildingAdministrative = (props: StaticIconProps) => {
  return <StyledIconBuildingAdministrative {...props}/>
}

IconBuildingAdministrative.displayName = 'Icon';
export { IconBuildingAdministrative };
