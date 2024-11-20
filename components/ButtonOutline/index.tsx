import React, { MouseEventHandler, useState } from "react"
import classNames from "classnames"
import "./index.scss"

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

  const usedClassName = classNames(
    "ButtonOutline",
    {
      [`ButtonOutline--${size}`]: size,
      [`ButtonOutline--${variant}`]: variant,
      [`cursor-progress`]: isLoading,
    },
    className
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
