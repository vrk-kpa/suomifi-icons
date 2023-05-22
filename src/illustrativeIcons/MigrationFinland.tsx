
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMigrationFinland as MigrationFinland } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMigrationFinland = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MigrationFinland
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

const IconMigrationFinland = (props: StaticIconProps) => {
  return <StyledIconMigrationFinland {...props}/>
}

IconMigrationFinland.displayName = 'Icon';
export { IconMigrationFinland };
