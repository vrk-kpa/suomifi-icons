
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconGroupOfPeople as GroupOfPeople } from '../../svgrComponents/baseIcons/';
import { baseIconStyles } from '../utils/styles';
import { BaseIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconGroupOfPeople = styled((props: BaseIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <GroupOfPeople
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

const IconGroupOfPeople = (props: BaseIconProps) => {
  return <StyledIconGroupOfPeople {...props}/>
}

IconGroupOfPeople.displayName = 'Icon';
export { IconGroupOfPeople };
