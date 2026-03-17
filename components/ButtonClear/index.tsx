import React, { MouseEventHandler, useState } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonClearProps
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

export default function ButtonClear(props: ButtonClearProps): JSX.Element {
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
    "relative border border-transparent bg-transparent rounded-md leading-4 active:shadow-sm"

  const sizeMap: Record<NonNullable<ButtonClearProps["size"]>, string> = {
    xs: "px-2.5 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-5 py-2 text-base",
    xl: "px-6 py-3 text-base",
  }

  const enabledVariantMap: Record<
    NonNullable<ButtonClearProps["variant"]>,
    string
  > = {
    neutral:
      "text-neutral-500 hover:underline active:bg-neutral-100 ring-neutral-500",
    primary:
      "text-primary-500 hover:underline active:bg-neutral-100 ring-primary-500",
    success:
      "text-success-500 hover:underline active:bg-neutral-100 ring-success-500",
    danger:
      "text-danger-500 hover:underline active:bg-neutral-100 ring-danger-500",
    warning:
      "text-warning-500 hover:underline active:bg-neutral-100 ring-warning-500",
    info: "text-info-500 hover:underline active:bg-neutral-100 ring-info-500",
    basic:
      "text-neutral-500 hover:underline active:bg-neutral-100 ring-neutral-500",
    secondary:
      "text-primary-500 hover:underline active:bg-neutral-100 ring-primary-500",
  }

  const disabledClasses = "text-neutral-400 cursor-not-allowed"
  const focusClasses = "focus:ring-2 focus:ring-offset-0"

  const usedClassName = twMerge(
    base,
    size ? sizeMap[size] : "",
    isLoading ? "cursor-progress" : "",
    variant ? enabledVariantMap[variant] : enabledVariantMap["neutral"],
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
