import React from "react"
import classNames from "classnames"
import "./index.scss"

export const BadgeSizes = ["sm", "lg"] as const
export type BadgeSize = (typeof BadgeSizes)[number]

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size: BadgeSize
  variant: "primary" | "neutral" | "success" | "danger" | "warning" | "info"
  text: string
}

export default function Badge(props: BadgeProps): JSX.Element {
  const { size, variant, text, ...rest } = props

  const usedClassName = classNames("Badge", {
    [`Badge--${size}`]: size,
    [`Badge--${variant}`]: variant,
  })

  return (
    <div className={usedClassName} {...rest}>
      {text}
    </div>
  )
}
