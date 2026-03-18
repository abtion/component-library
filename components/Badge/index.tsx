import React from "react"
import { twMerge } from "tailwind-merge"

export const BadgeSizes = ["sm", "lg"] as const
export type BadgeSize = (typeof BadgeSizes)[number]

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: BadgeSize
  variant?: "primary" | "neutral" | "success" | "danger" | "warning" | "info"
  text: string
}

export default function Badge(props: BadgeProps): JSX.Element {
  const { size, variant, text, className, ...rest } = props

  const base = "flex mr-3 w-max rounded-full"

  const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
    neutral: "text-neutral-800 bg-neutral-200",
    primary: "text-primary-800 bg-primary-100",
    success: "text-success-800 bg-success-100",
    danger: "text-danger-800 bg-danger-100",
    warning: "text-warning-800 bg-warning-100",
    info: "text-info-800 bg-info-100",
  }

  const sizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
    sm: "text-xs py-[2px] px-2.5",
    lg: "text-sm py-[2px] px-3",
  }

  const usedClassName = twMerge(
    base,
    variant ? variantClasses[variant] : "",
    size ? sizeClasses[size] : "",
    className ?? "",
  )

  return (
    <div className={usedClassName} {...rest}>
      {text}
    </div>
  )
}
