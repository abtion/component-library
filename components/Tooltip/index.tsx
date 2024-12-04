import React from "react"
import "./index.scss"

export type TooltipProps = {
  tip: string
  className?: string
}

export const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = (
  props,
) => {
  return (
    <span className="Tooltip">
      {props.children}
      <span className="Tooltip__box">
        <p className={`Tooltip__box--text ${props.className} `}>{props.tip}</p>
        <svg
          className="text-primary-800 h-1"
          x="0px"
          y="0px"
          viewBox="0 0 10 5"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 5,5 10,0" />
        </svg>
      </span>
    </span>
  )
}
