
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Authorisation from '../../assets/illustrativeIcons/icon-illustration-authorisation.svg';
import { iconStyles } from '../utils/styles';
import { SuomifiIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconAuthorisation = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
    props;
  return (
    <Authorisation
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${({ color, fill }) => iconStyles({ color, fill })}
`;

IconAuthorisation.displayName = 'Icon';
export { IconAuthorisation };
