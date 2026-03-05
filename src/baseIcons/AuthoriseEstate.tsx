
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconAuthoriseEstate as AuthoriseEstate } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconAuthoriseEstate = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <AuthoriseEstate
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

const IconAuthoriseEstate = (props: BaseIconProps) => {
  return <StyledIconAuthoriseEstate {...props}/>
}

IconAuthoriseEstate.displayName = 'Icon';
export { IconAuthoriseEstate };
