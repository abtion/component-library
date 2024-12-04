import React from "react"
import { DateRange } from "react-day-picker"

const datesEqual = (date1?: Date, date2?: Date) =>
  date1 !== undefined &&
  date2 !== undefined &&
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate()

export const DateRangePill = (props: {
  text: string
  startDate: Date
  endDate: Date
  currentRange: DateRange
  onClick: (range: DateRange) => void
  disabled?: boolean
}) => {
  const { text, startDate, endDate, currentRange, onClick, disabled } = props

  const isSelected =
    datesEqual(currentRange.from, startDate) &&
    datesEqual(currentRange.to, endDate)

  return (
    <div
      className={`bg-neutral-800 w-2/5 rounded-full my-1 text-center ${
        isSelected
          ? "text-primary font-bold bg-primary-100 lg:bg-primary-100"
          : disabled
            ? "text-white/40 cursor-not-allowed"
            : `text-white ${disabled ? "" : "cursor-pointer"}`
      }`}
      onClick={
        disabled ? () => {} : () => onClick({ from: startDate, to: endDate })
      }
    >
      <p className="p-2 text-xs">{text}</p>
    </div>
  )
}
