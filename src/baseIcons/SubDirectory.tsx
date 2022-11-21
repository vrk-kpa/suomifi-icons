
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import SubDirectory from '../../assets/baseIcons/icon-sub-directory.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconSubDirectory = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <SubDirectory
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

IconSubDirectory.displayName = 'Icon';
export { IconSubDirectory };
