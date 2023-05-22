
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconGenericFile as GenericFile } from '../../svgrComponents/doctypeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconGenericFile = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <GenericFile
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

const IconGenericFile = (props: StaticIconProps) => {
  return <StyledIconGenericFile {...props}/>
}

IconGenericFile.displayName = 'Icon';
export { IconGenericFile };
