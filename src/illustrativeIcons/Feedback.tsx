
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as Feedback } from '../../assets/illustrativeIcons/icon-illustration-feedback.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconFeedback = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <Feedback
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

IconFeedback.displayName = 'Icon';
export { IconFeedback };
