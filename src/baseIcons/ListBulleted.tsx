
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as ListBulleted } from '../../assets/baseIcons/icon-list-bulleted.svg';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconListBulleted = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <ListBulleted
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

IconListBulleted.displayName = 'Icon';
export { IconListBulleted };
