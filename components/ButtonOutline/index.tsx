import React, { MouseEventHandler, useState } from "react"
import { twMerge } from "tailwind-merge"

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
  const { size, variant, className, onClick, children, ...rest } = props
  const [isLoading, setIsLoading] = useState(false)

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (isLoading) return
    setIsLoading(true)
    try {
      await Promise.resolve(onClick?.(e))
    } finally {
      setIsLoading(false)
    }
  }

  const base =
    "relative border border-solid bg-transparent font-medium leading-4 shadow-sm rounded-md"

  const sizeMap: Record<string, string> = {
    xs: "px-2.5 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-5 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }

  const variantMap: Record<string, string> = {
    neutral:
      "text-neutral-500 border-neutral-500 hover:bg-neutral-600 hover:text-neutral-600-contrast active:bg-neutral-700 ring-neutral-500",
    primary:
      "text-primary-500 border-primary-500 hover:bg-primary-600 hover:text-primary-600-contrast active:bg-primary-700 ring-primary-500",
    success:
      "text-success-500 border-success-500 hover:bg-success-600 hover:text-success-600-contrast active:bg-success-700 ring-success-500",
    danger:
      "text-danger-500 border-danger-500 hover:bg-danger-600 hover:text-danger-600-contrast active:bg-danger-700 ring-danger-500",
    warning:
      "text-warning-500 border-warning-500 hover:bg-warning-600 hover:text-warning-600-contrast active:bg-warning-700 ring-warning-500",
    info: "text-info-500 border-info-500 hover:bg-info-600 hover:text-info-600-contrast active:bg-info-700 ring-info-500",
    basic:
      "text-neutral-700 bg-white border border-neutral-300 hover:text-neutral-300-contrast hover:bg-neutral-50 active:bg-neutral-100 ring-primary-600",
    secondary:
      "text-primary-700 bg-primary-100 hover:bg-primary-200 hover:text-primary-200-contrast active:bg-primary-300 ring-primary-600",
  }

  const usedClassName = twMerge(
    base,
    size ? sizeMap[size] : "",
    isLoading ? "cursor-progress" : "",
    variant ? variantMap[variant] : "",
    className ?? "",
  )

  return (
    <button
      className={usedClassName}
      {...(onClick ? { onClick: handleClick } : {})}
      {...rest}
    >
      <div className={isLoading ? "invisible" : "visible"}>{children}</div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isLoading ? "visible" : "invisible"
        }`}
      >
        <p>Loading...</p>
      </div>
    </button>
  )
}
