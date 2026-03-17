import { twMerge } from "tailwind-merge"
import React from "react"

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  spinnerClassName?: string
  textClassName?: string
}

export default function Loader({
  text,
  className,
  spinnerClassName,
  textClassName,
  ...rest
}: LoaderProps): JSX.Element {
  const usedClassName = twMerge("text-center", className)
  const usedSpinnerClassName = twMerge(
    "border-2 border-current rounded-full border-l-transparent w-10 h-10 animate-spin mx-auto",
    spinnerClassName,
  )
  const usedTextClassName = twMerge("text-neutral-500 mt-2", textClassName)

  return (
    <div className={usedClassName} {...rest}>
      <div className={usedSpinnerClassName} />
      <div className={usedTextClassName}>{text}</div>
    </div>
  )
}
