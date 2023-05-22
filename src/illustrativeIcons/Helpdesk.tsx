
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconHelpdesk as Helpdesk } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconHelpdesk = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <Helpdesk
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

const IconHelpdesk = (props: StaticIconProps) => {
  return <StyledIconHelpdesk {...props}/>
}

IconHelpdesk.displayName = 'Icon';
export { IconHelpdesk };
