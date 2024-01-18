import React from "react"
import classNames from "classnames"
import "./index.scss"

export interface AlertIconProps extends React.HTMLAttributes<SVGElement> {
  variant?: "primary" | "neutral" | "success" | "danger" | "warning" | "info"
  icon: (props: React.HTMLAttributes<SVGElement>) => JSX.Element
}

export default function AlertIcon(props: AlertIconProps): JSX.Element {
  const { icon: Icon, variant, className, ...rest } = props

  const usedClassName = classNames(
    "AlertIcon",
    {
      [`AlertIcon--${variant}`]: variant,
    },
    className
  )

  return <Icon className={usedClassName} {...rest} />
}
