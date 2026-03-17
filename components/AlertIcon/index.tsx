import React from "react"
import { twMerge } from "tailwind-merge"

export interface AlertIconProps extends React.HTMLAttributes<SVGElement> {
  variant?: "primary" | "neutral" | "success" | "danger" | "warning" | "info"
  icon: (props: React.HTMLAttributes<SVGElement>) => JSX.Element
}

export default function AlertIcon(props: AlertIconProps): JSX.Element {
  const { icon: Icon, variant, className, ...rest } = props

  const base = "w-5 h-5 flex-none mr-3"

  const variantClasses: Record<
    NonNullable<AlertIconProps["variant"]>,
    string
  > = {
    neutral: "text-neutral-400",
    primary: "text-primary-400",
    success: "text-success-400",
    danger: "text-danger-400",
    warning: "text-warning-400",
    info: "text-info-400",
  }

  const usedClassName = twMerge(
    base,
    variant ? variantClasses[variant] : "",
    className ?? "",
  )

  return <Icon className={usedClassName} {...rest} />
}
