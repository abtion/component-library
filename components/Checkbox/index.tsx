import React from "react"
import classNames from "classnames"
import "./index.scss"

const CheckboxVariants = ["default", "rounded"] as const
export type CheckboxVariant = (typeof CheckboxVariants)[number]

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: CheckboxVariant
}

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const { variant, className, ...rest } = props

  const usedClassName = classNames(
    "Checkbox",
    {
      [`Checkbox--${variant}`]: variant,
    },
    className
  )

  return <input type="checkbox" className={usedClassName} {...rest} />
}
