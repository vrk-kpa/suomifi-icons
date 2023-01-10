
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconFileCabinet as FileCabinet } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconFileCabinet = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <FileCabinet
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${staticIconStyles}
`;

const IconFileCabinet = (props: StaticIconProps) => {
  return <StyledIconFileCabinet {...props}/>
}

IconFileCabinet.displayName = 'Icon';
export { IconFileCabinet };
