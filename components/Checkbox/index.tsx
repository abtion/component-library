import React from "react"
import classNames from "classnames"
import "./index.scss"

export type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>

export default function Checkbox(props: CheckboxProps): JSX.Element {
  const { className, ...rest } = props

  const usedClassName = classNames("Checkbox", className)

  return <input type="checkbox" className={usedClassName} {...rest} />
}
