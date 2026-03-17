import React from "react"
import { twMerge } from "tailwind-merge"

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "error"
}

export default function Input(props: InputProps): JSX.Element {
  const { size, variant, className, ...rest } = props

  const base =
    "block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm leading-5 text-neutral-900 placeholder:text-neutral-400"

  const sizeMap: Record<NonNullable<InputProps["size"]>, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  }

  const variantMap: Record<NonNullable<InputProps["variant"]>, string> = {
    default: "focus:ring-primary-600 focus:border-primary-600",
    error:
      "border-danger-500 text-danger-700 focus:ring-danger-500 focus:border-danger-500",
  }

  const usedClassName = twMerge(
    base,
    size ? sizeMap[size] : "",
    variant ? variantMap[variant] : "",
    className ?? "",
  )

  return <input className={usedClassName} {...rest} />
}
