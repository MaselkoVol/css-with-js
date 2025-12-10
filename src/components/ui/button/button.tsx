import React, { useMemo } from "react";
import { jcn } from "../../../utils/design/dynamic/dynamic";
import "./button.scss";
import { ColorRole } from "../../../utils/design/dynamic/theme/config/config";
import { getCssVariables } from "../../../utils/design/dynamic/theme/utils";
import { BorderRadius } from "../../../utils/design/static/variables/config";

export type ButtonVariant = "contained" | "outlined" | "text";

export type ButtonProps = {
  color?: ColorRole;
  variant?: ButtonVariant;
  borderRadius?: BorderRadius;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function (
  {
    color = "primary",
    variant = "contained",
    borderRadius = BorderRadius.md,
    children,
    className,
    ...props
  },
  ref
) {
  const style: Record<string, string> = useMemo(
    () => ({
      "--border-radius": borderRadius,
      ...getCssVariables(color),
    }),
    [color]
  );
  return (
    <button
      ref={ref}
      style={style}
      className={jcn(className, "button", variant)}
      {...props}
    >
      {children}
    </button>
  );
});

export default React.memo(Button);
