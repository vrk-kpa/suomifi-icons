import { css } from 'styled-components';

export const baseIconStyles = ({
  color,
  fill
}: {
  color?: string;
  fill?: string;
}) => {
  const resolvedColor = fill ?? color ?? 'currentColor';
  return css`
    vertical-align: baseline;
    &.fi-icon {
      display: inline-block;
    }
    .fi-icon-base-fill {
      fill: ${resolvedColor};
    }
    .fi-icon-base-stroke {
      stroke: ${resolvedColor};
    }
    &.fi-icon--cursor-pointer {
      cursor: pointer;
      & * {
        cursor: inherit;
      }
    }
  `;
};

export const staticIconStyles = ({
  highlightColor,
  baseColor
}: {
  highlightColor?: string;
  baseColor?: string;
}) => css`
  vertical-align: baseline;
  &.fi-static-icon {
    display: inline-block;
  }
  &.fi-icon--cursor-pointer {
    cursor: pointer;
    & * {
      cursor: inherit;
    }
  }
  ${!!highlightColor &&
  `.fi-icon-illustrative-highlight-fill {
    fill: ${highlightColor};
  }
  .fi-icon-illustrative-highlight-stroke {
    stroke: ${highlightColor}
  }
  `}
  ${!!baseColor &&
  `.fi-icon-illustrative-base-fill {
    fill: ${baseColor};
  }
  .fi-icon-illustrative-base-stroke {
    stroke: ${baseColor}
  }
  `}
`;

export const logoIconStyles = () => css`
  display: inline-block;
  vertical-align: baseline;
  &.fi-icon--cursor-pointer {
    cursor: pointer;
    & * {
      cursor: inherit;
    }
  }
`;
