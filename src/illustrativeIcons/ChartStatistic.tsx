
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as ChartStatistic } from '../../assets/illustrativeIcons/icon-illustration-chart-statistic.svg';
import { staticIconStyles } from '../utils/styles';
import { StaticIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconChartStatistic = styled((props: StaticIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <ChartStatistic
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

IconChartStatistic.displayName = 'Icon';
export { IconChartStatistic };
