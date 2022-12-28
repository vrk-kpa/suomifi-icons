
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as Save } from '../../assets/baseIcons/icon-save.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconSave = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Save
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${baseIconStyles}
`;

IconSave.displayName = 'Icon';
export { IconSave };
