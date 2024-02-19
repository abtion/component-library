import React from "react"
import "./index.scss"

export type TooltipProps = {
  hoverText: string
  customStyle?: string
}

export const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = (
  props
) => {
  return (
    <div className="Tooltip">
      <div>{props.children}</div>
      <div className="Tooltip__box">
        <p className={`Tooltip__box--text ${props.customStyle} `}>
          {props.hoverText}
        </p>
        <svg
          className="text-primary-800 h-2"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  )
}
