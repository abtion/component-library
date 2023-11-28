import React from "react"
import classNames from "classnames"
import "./index.scss"

export type RadioButtonProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
>

export default function RadioButton(props: RadioButtonProps): JSX.Element {
  const { className, ...rest } = props

  const usedClassName = classNames("RadioButton", className)

  return <input type="radio" className={usedClassName} {...rest} />
}
