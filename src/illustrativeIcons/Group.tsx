
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Group from '../../assets/illustrativeIcons/icon-illustration-group.svg';
import { iconStyles } from '../utils/styles';
import { SuomifiIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconGroup = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
    props;
  return (
    <Group
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

IconGroup.displayName = 'Icon';
export { IconGroup };
