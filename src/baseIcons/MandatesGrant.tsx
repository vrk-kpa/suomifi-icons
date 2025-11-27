
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconMandatesGrant as MandatesGrant } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconMandatesGrant = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <MandatesGrant
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

const IconMandatesGrant = (props: BaseIconProps) => {
  return <StyledIconMandatesGrant {...props}/>
}

IconMandatesGrant.displayName = 'Icon';
export { IconMandatesGrant };
