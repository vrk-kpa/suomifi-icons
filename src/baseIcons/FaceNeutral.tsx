
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconFaceNeutral as FaceNeutral } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconFaceNeutral = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <FaceNeutral
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

const IconFaceNeutral = (props: BaseIconProps) => {
  return <StyledIconFaceNeutral {...props}/>
}

IconFaceNeutral.displayName = 'Icon';
export { IconFaceNeutral };
