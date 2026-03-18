import React, { MouseEventHandler, useState } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps
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

export default function Button(props: ButtonProps): JSX.Element {
  const { size, variant, className, onClick, children, disabled, ...rest } =
    props
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
    "relative border border-transparent font-medium leading-4 shadow-xs rounded-md"

  const sizeMap: Record<NonNullable<ButtonProps["size"]>, string> = {
    xs: "px-2.5 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-5 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }

  const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
    neutral:
      "text-neutral-600-contrast bg-neutral-500 hover:bg-neutral-600 active:bg-neutral-700 ring-neutral-500",
    primary:
      "text-primary-600-contrast bg-primary-500 hover:bg-primary-600 active:bg-primary-700 ring-primary-500",
    success:
      "text-success-600-contrast bg-success-500 hover:bg-success-600 active:bg-success-700 ring-success-500",
    danger:
      "text-danger-600-contrast bg-danger-500 hover:bg-danger-600 active:bg-danger-700 ring-danger-500",
    warning:
      "text-warning-600-contrast bg-warning-500 hover:bg-warning-600 active:bg-warning-700 ring-warning-500",
    info: "text-info-600-contrast bg-info-500 hover:bg-info-600 active:bg-info-700 ring-info-500",
    basic:
      "text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 focus:ring-primary-600",
    secondary:
      "text-primary-700 bg-primary-100 hover:bg-primary-200 active:bg-primary-300 focus:ring-primary-600",
  }

  const disabledClasses = "text-neutral-400 bg-neutral-100 cursor-not-allowed"
  const focusClasses = "focus:ring-2 focus:ring-offset-2"

  const usedClassName = twMerge(
    base,
    size ? sizeMap[size] : "",
    variant ? variantMap[variant] : "",
    isLoading ? "cursor-progress" : "",
    disabled ? disabledClasses : focusClasses,
    className ?? "",
  )

  return (
    <button
      className={usedClassName}
      {...(onClick ? { onClick: handleClick } : {})}
      disabled={disabled || isLoading}
      {...rest}
    >
      <div className={isLoading ? "invisible" : "visible"}>{children}</div>
      <div
        className={twMerge(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          isLoading ? "visible" : "invisible",
        )}
      >
        <p>Loading...</p>
      </div>
    </button>
  )
}
