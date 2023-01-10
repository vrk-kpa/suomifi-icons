
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconChartAnalytics as ChartAnalytics } from '../../svgrComponents/illustrativeIcons/';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconChartAnalytics = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <ChartAnalytics
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

const IconChartAnalytics = (props: StaticIconProps) => {
  return <StyledIconChartAnalytics {...props}/>
}

IconChartAnalytics.displayName = 'Icon';
export { IconChartAnalytics };
