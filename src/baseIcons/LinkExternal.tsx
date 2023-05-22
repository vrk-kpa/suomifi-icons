
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLinkExternal as LinkExternal } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLinkExternal = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LinkExternal
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

const IconLinkExternal = (props: BaseIconProps) => {
  return <StyledIconLinkExternal {...props}/>
}

IconLinkExternal.displayName = 'Icon';
export { IconLinkExternal };
