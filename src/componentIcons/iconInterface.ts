export interface BaseIconProps {
  /** Custom classname to extend or customize */
  className?: string;
  /** Aria-label for SVG, undefined hides SVG from screen reader
   * @default undefined
   */
  ariaLabel?: string;
  /** Show mouse cursor as hand-pointer */
  mousePointer?: boolean;
  /** Custom fill color */
  color?: string;
  /** Custom fill color, takes precedence over color if both are provided */
  fill?: string;
  testId?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

export interface StaticIconProps {
  /** Custom classname to extend or customize */
  className?: string;
  /** Aria-label for SVG, undefined hides SVG from screen reader
   * @default undefined
   */
  ariaLabel?: string;
  /** Show mouse cursor as hand-pointer */
  mousePointer?: boolean;
  /**
   * Highlight fill and stroke color for the icon
   * @default accentBase
   */
  highlightColor?: string;
  /**
   * Base fill and stroke color for the icon
   * @default depthBase
   */
  baseColor?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

export interface LogoIconProps {
  /** Custom classname to extend or customize */
  className?: string;
  /** Aria-label for SVG, undefined hides SVG from screen reader
   * @default undefined
   */
  ariaLabel?: string;
  /** Show mouse cursor as hand-pointer */
  mousePointer?: boolean;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}
