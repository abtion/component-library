import React from "react"
import { twMerge } from "tailwind-merge"

export type TooltipProps = {
  tip: string
  className?: string
}

export const Tooltip: React.FC<React.PropsWithChildren<TooltipProps>> = (
  props,
) => {
  const { tip, className, children } = props

  const containerClass = twMerge("relative inline-block group", className ?? "")
  const boxClass =
    "hidden group-hover:flex flex-col absolute items-center bottom-full left-1/2 -translate-x-1/2 z-10 overflow-visible"

  const textClass = "bg-primary-800 text-primary-800-contrast p-1 rounded-lg"
  const svgClass = "text-primary-800 h-1"

  return (
    <span className={containerClass}>
      {children}
      <span className={boxClass}>
        <p className={textClass}>{tip}</p>
        <svg
          className={svgClass}
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
