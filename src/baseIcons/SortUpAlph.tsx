
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconSortUpAlph as SortUpAlph } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconSortUpAlph = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <SortUpAlph
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

const IconSortUpAlph = (props: BaseIconProps) => {
  return <StyledIconSortUpAlph {...props}/>
}

IconSortUpAlph.displayName = 'Icon';
export { IconSortUpAlph };
