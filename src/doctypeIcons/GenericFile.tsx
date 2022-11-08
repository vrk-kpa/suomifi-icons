
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import GenericFile from '../../assets/doctypeIcons/icon-generic-file.svg';
import { iconStyles } from '../utils/styles';
import { SuomifiIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconGenericFile = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
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
  ${({ color, fill }) => iconStyles({ color, fill })}
`;

IconGenericFile.displayName = 'Icon';
export { IconGenericFile };
