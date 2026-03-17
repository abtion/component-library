import React from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  variant?: "default" | "error"
}

export default function Input(props: InputProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const base =
    "border border-transparent text-base leading-4 focus:ring-1 focus:outline-none shadow-xs rounded-md"

  const sizeMap: Record<NonNullable<InputProps["size"]>, string> = {
    xs: "px-2.5 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-5 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }

  const variantMap: Record<NonNullable<InputProps["variant"]>, string> = {
    default:
      "border-neutral-300 focus:ring-primary-400 focus:border-primary-400",
    error: "border-danger-500 focus:ring-danger-400 focus:border-danger-400",
  }

  const usedClassName = twMerge(
    base,
    size ? sizeMap[size] : "",
    variant ? variantMap[variant] : "",
    className ?? "",
  )

  return <input className={usedClassName} {...rest} />
}
