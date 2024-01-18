import React from "react"
import classNames from "classnames"
import "./index.scss"

export interface ButtonClearProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?:
    | "basic"
    | "secondary"
    | "primary"
    | "neutral"
    | "success"
    | "danger"
    | "warning"
    | "info"
}

export default function ButtonClear(props: ButtonClearProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "ButtonClear",
    {
      [`ButtonClear--${size}`]: size,
      [`ButtonClear--${variant}`]: variant,
    },
    className
  )

  return <button className={usedClassName} {...rest} />
}
