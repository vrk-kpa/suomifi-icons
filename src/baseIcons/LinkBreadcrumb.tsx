
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLinkBreadcrumb as LinkBreadcrumb } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLinkBreadcrumb = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LinkBreadcrumb
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

const IconLinkBreadcrumb = (props: BaseIconProps) => {
  return <StyledIconLinkBreadcrumb {...props}/>
}

IconLinkBreadcrumb.displayName = 'Icon';
export { IconLinkBreadcrumb };
