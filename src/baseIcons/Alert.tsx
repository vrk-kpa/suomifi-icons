import React, { ReactComponentElement } from "react";
import IconAlert from "../../assets/baseIcons/icon-alert.svg";
import classnames from "classnames";

const baseClassName = "fi-icon";
const cursorPointerClassName = `${baseClassName}--cursor-pointer`;

interface SuomifiIconProps {
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

const Alert = ({
  ariaLabel,
  mousePointer,
  className,
  props,
}: SuomifiIconProps) => (
  <IconAlert
    aria-label="Toimii"
    {...props}
    className={classnames(baseClassName, className, {
      [cursorPointerClassName]: !!mousePointer,
    })}
  />
);

export default Alert;
