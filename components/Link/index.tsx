import React from "react"
import { twMerge } from "tailwind-merge"

export const LinkSizes = ["xs", "sm", "bs"] as const
export type LinkSize = (typeof LinkSizes)[number]

export const LinkVariants = [
  "neutral",
  "neutral-light",
  "neutral-dark",
  "info",
] as const
export type LinkVariant = (typeof LinkVariants)[number]

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  text: string
  size?: LinkSize
  underline?: boolean
}

export default function Link(props: LinkProps): JSX.Element {
  const { underline, size, variant, className, text, ...rest } = props

  const base = "flex w-max cursor-pointer hover:underline"
  const variantMap: Record<NonNullable<LinkProps["variant"]>, string> = {
    neutral: "text-neutral-500",
    "neutral-light": "text-neutral-400",
    "neutral-dark": "text-neutral-700",
    info: "text-info-400",
  }

  const sizeMap: Record<NonNullable<LinkProps["size"]>, string> = {
    xs: "text-xs",
    sm: "text-sm",
    bs: "text-base",
  }

  const variantClass = variant ? variantMap[variant] : "text-info-400"
  const sizeClass = size ? sizeMap[size] : ""
  const underlineClass = underline ? "underline hover:no-underline" : ""

  const usedClassName = twMerge(
    base,
    variantClass,
    sizeClass,
    underlineClass,
    className ?? "",
  )

  return (
    <a className={usedClassName} {...rest}>
      {text}
    </a>
  )
}
