import React from "react"

export const DateRangePill = (props: {
  text: string
  onClick?: VoidFunction
  disabled?: boolean
  isSelected: boolean
}) => {
  return (
    <div
      className={`bg-neutral-800 w-fit rounded-full my-1 ${
        props.isSelected
          ? "text-primary font-bold bg-primary-100 lg:bg-primary-100"
          : props.disabled
          ? "text-white/40 cursor-not-allowed"
          : `text-white ${props.onClick ? "cursor-pointer" : ""}`
      }`}
      onClick={props.disabled ? () => {} : props.onClick}
    >
      <p className="p-2 text-xs">{props.text}</p>
    </div>
  )
}
