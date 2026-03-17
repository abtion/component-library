import React from "react"
import { twMerge } from "tailwind-merge"

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const { className, disabled, checked, ...rest } = props

  // Base styles from previous SCSS inlined as Tailwind classes
  const base =
    "appearance-none inline-flex w-4 h-4 bg-white border-neutral-300 rounded-sm border-[1px] outline-none"

  // Interaction states (only applied when not disabled)
  const hover = disabled ? "" : "hover:rounded-[4px]"
  const focus = disabled
    ? ""
    : "focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 focus:rounded-[4px]"

  // Reflect the checked and disabled states with classes when props indicate them.
  // Note: the original SCSS used a ::before mask for the check icon; that can't be
  // represented purely with static classes on the input reliably, so we keep visual
  // background and border changes here. If you need the exact mask artifact,
  // prefer to render a custom element instead of a native input or keep the SCSS.
  const checkedClasses = checked
    ? "border-none bg-primary-500 rounded-[4px]"
    : ""
  const disabledClasses = disabled
    ? "select-none border-neutral-200 bg-neutral-100 cursor-not-allowed"
    : ""

  const usedClassName = twMerge(
    base,
    hover,
    focus,
    checkedClasses,
    disabledClasses,
    className ?? "",
  )

  return (
    <input
      type="checkbox"
      className={usedClassName}
      disabled={disabled}
      checked={checked}
      {...rest}
    />
  )
}
