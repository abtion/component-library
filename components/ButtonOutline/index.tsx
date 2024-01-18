import React from "react"
import classNames from "classnames"
import "./index.scss"

export interface ButtonOutlineProps
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

export default function ButtonOutline(props: ButtonOutlineProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const usedClassName = classNames(
    "ButtonOutline",
    {
      [`ButtonOutline--${size}`]: size,
      [`ButtonOutline--${variant}`]: variant,
    },
    className
  )

  return <button className={usedClassName} {...rest} />
}
