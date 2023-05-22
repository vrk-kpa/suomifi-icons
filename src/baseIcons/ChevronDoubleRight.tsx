
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChevronDoubleRight as ChevronDoubleRight } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChevronDoubleRight = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChevronDoubleRight
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

const IconChevronDoubleRight = (props: BaseIconProps) => {
  return <StyledIconChevronDoubleRight {...props}/>
}

IconChevronDoubleRight.displayName = 'Icon';
export { IconChevronDoubleRight };
