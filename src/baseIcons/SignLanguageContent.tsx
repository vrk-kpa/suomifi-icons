
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconSignLanguageContent as SignLanguageContent } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconSignLanguageContent = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <SignLanguageContent
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

const IconSignLanguageContent = (props: BaseIconProps) => {
  return <StyledIconSignLanguageContent {...props}/>
}

IconSignLanguageContent.displayName = 'Icon';
export { IconSignLanguageContent };
