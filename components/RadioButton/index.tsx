import React from "react"
import { twMerge } from "tailwind-merge"

export type RadioButtonProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>

export default function RadioButton(props: RadioButtonProps): JSX.Element {
  const { className, disabled, checked, ...rest } = props

  // Base styles from previous SCSS inlined as Tailwind classes
  const base =
    "appearance-none inline-flex items-center justify-center w-4 h-4 bg-white border-neutral-300 border rounded-full border-[1px] transition-colors outline-none"

  const focus = disabled
    ? ""
    : "focus:ring-2 focus:ring-offset-2 focus:ring-primary-400"
  const checkedClasses = checked ? "border-none bg-primary-500" : ""
  const disabledClasses = disabled
    ? "select-none border-neutral-200 bg-neutral-100 cursor-not-allowed"
    : ""

  const usedClassName = twMerge(
    base,
    focus,
    checkedClasses,
    disabledClasses,
    className ?? "",
  )

  return (
    <input
      type="radio"
      className={usedClassName}
      disabled={disabled}
      checked={checked}
      {...rest}
    />
  )
}
