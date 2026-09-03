
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconFaceNegative as FaceNegative } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconFaceNegative = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <FaceNegative
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

const IconFaceNegative = (props: BaseIconProps) => {
  return <StyledIconFaceNegative {...props}/>
}

IconFaceNegative.displayName = 'Icon';
export { IconFaceNegative };
