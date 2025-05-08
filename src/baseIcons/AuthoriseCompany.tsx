
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconAuthoriseCompany as AuthoriseCompany } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconAuthoriseCompany = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <AuthoriseCompany
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

const IconAuthoriseCompany = (props: BaseIconProps) => {
  return <StyledIconAuthoriseCompany {...props}/>
}

IconAuthoriseCompany.displayName = 'Icon';
export { IconAuthoriseCompany };
