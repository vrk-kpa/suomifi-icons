
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Pillar from '../../assets/illustrativeIcons/icon-illustration-pillar.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from '../utils/iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconPillar = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Pillar
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

IconPillar.displayName = 'Icon';
export { IconPillar };
