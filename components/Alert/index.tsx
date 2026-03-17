import React from "react"
import { twMerge } from "tailwind-merge"
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "neutral" | "success" | "danger" | "warning" | "info"
  onClose?: () => void
}

export default function Alert(props: AlertProps): JSX.Element {
  const { variant, className, onClose, children, ...rest } = props

  const baseClasses = "text-sm rounded-md px-4 py-4"

  const variantClasses: Record<NonNullable<AlertProps["variant"]>, string> = {
    primary: "text-primary-800 bg-primary-50",
    neutral: "text-neutral-800 bg-neutral-50",
    success: "text-success-800 bg-success-50",
    danger: "text-danger-800 bg-danger-50",
    warning: "text-warning-800 bg-warning-50",
    info: "text-info-800 bg-info-50",
  }

  const closeVariantClasses: Record<
    NonNullable<AlertProps["variant"]>,
    string
  > = {
    primary: "text-primary-500 hover:text-primary-700",
    neutral: "text-neutral-500 hover:text-neutral-700",
    success: "text-success-500 hover:text-success-700",
    danger: "text-danger-500 hover:text-danger-700",
    warning: "text-warning-500 hover:text-warning-700",
    info: "text-info-500 hover:text-info-700",
  }

  // original SCSS used padding-right: 3.25rem for dismissable alerts -> use arbitrary value
  const dismissableClasses = onClose ? "relative pr-[3.25rem]" : ""

  const usedClassName = twMerge(
    baseClasses,
    variant ? variantClasses[variant] : "",
    dismissableClasses,
    className ?? "",
  )

  const closeClassName = twMerge(
    "p-4 absolute right-0 top-0 cursor-pointer",
    variant ? closeVariantClasses[variant] : closeVariantClasses["neutral"],
  )

  const iconClassName = "w-5 h-5"

  return (
    <div className={usedClassName} role="alert" {...rest}>
      {children}
      {onClose && (
        <button
          className={closeClassName}
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          <XMarkIcon className={iconClassName} />
        </button>
      )}
    </div>
  )
}
