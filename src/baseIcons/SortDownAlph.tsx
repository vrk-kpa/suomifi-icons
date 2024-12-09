
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconSortDownAlph as SortDownAlph } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconSortDownAlph = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <SortDownAlph
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

const IconSortDownAlph = (props: BaseIconProps) => {
  return <StyledIconSortDownAlph {...props}/>
}

IconSortDownAlph.displayName = 'Icon';
export { IconSortDownAlph };
