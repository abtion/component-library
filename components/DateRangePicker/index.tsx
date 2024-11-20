import React, { useState } from "react"
import Button from "../Button"
import {
  ActiveModifiers,
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from "react-day-picker"
import "./index.scss"
import { da } from "date-fns/locale"
import "react-day-picker/dist/style.css"

import { DateRangePill } from "./DateRangePill"

const datesEqual = (date1?: Date, date2?: Date) =>
  date1 !== undefined &&
  date2 !== undefined &&
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate()

const dateToStr = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`

const today = new Date()

const DateRangePicker = (props: { onClose: () => void }) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined)
  const [pickStartDate, setPickStartDate] = useState(true)
  const [hoverDay, setHoverDay] = useState<Date | undefined>(undefined)

  const handleSelect: SelectRangeEventHandler = (
    _range: DateRange | undefined,
    selectedDay: Date,
    _activeModifiers: ActiveModifiers,
    _e: React.MouseEvent
  ) => {
    setRange((prev) =>
      pickStartDate
        ? {
            from: selectedDay,
            to: undefined,
          }
        : {
            from: prev?.from
              ? prev.from <= selectedDay
                ? prev.from
                : selectedDay
              : undefined,
            to: prev?.from
              ? prev.from <= selectedDay
                ? selectedDay
                : prev.from
              : undefined,
          }
    )
    setPickStartDate((prev) => !prev)
  }

  const year = today.getFullYear()
  const month = today.getMonth()
  const thisMonthFirstDay = new Date(year, month, 1)
  const thisMonthLastDay = new Date(year, month + 1, 0)
  const lastMonthFirstDay = new Date(year, month - 1, 1)
  const lastMonthLastDay = new Date(year, month, 0)
  const threeMonthsFirstDay = new Date(year, month - 3, 1)
  const sixMonthsFirstDay = new Date(year, month - 6, 1)
  const firstDayYear = new Date(year, 0, 1)

  const thisMonthSelected =
    datesEqual(range?.from, thisMonthFirstDay) &&
    datesEqual(range?.to, thisMonthLastDay)
  const previousMonthSelected =
    datesEqual(range?.from, lastMonthFirstDay) &&
    datesEqual(range?.to, lastMonthLastDay)
  const last3MonthsSelected =
    datesEqual(range?.from, threeMonthsFirstDay) &&
    datesEqual(range?.to, lastMonthLastDay)
  const this6MonthsSelected =
    datesEqual(range?.from, sixMonthsFirstDay) && datesEqual(range?.to, today)
  const thisYearSelected =
    datesEqual(range?.from, firstDayYear) && datesEqual(range?.to, today)

  return (
    <div
      className={`fixed w-full z-50 bottom-48 left-0 px-2 lg:px-0 lg:w-fit lg:absolute lg:top-16 lg:h-96 lg:-left-32`}
    >
      <div className="flex flex-col gap-4 bg-dark text-white rounded-t-20px p-4 w-full">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={handleSelect}
          showOutsideDays
          locale={da}
          captionLayout="dropdown-buttons"
          fromYear={today.getFullYear() - 6}
          toYear={today.getFullYear()}
          onDayMouseEnter={(day: Date) => setHoverDay(day)}
        />
        <div className="flex w-full lg:max-w-72 flex-wrap gap-2 my-2">
          <DateRangePill
            text="This month"
            isSelected={thisMonthSelected}
            onClick={() =>
              setRange({ from: thisMonthFirstDay, to: thisMonthLastDay })
            }
          />
          <DateRangePill
            text="Previous month"
            isSelected={previousMonthSelected}
            onClick={() =>
              setRange({ from: lastMonthFirstDay, to: lastMonthLastDay })
            }
          />
          <DateRangePill
            text="Last 3 months"
            isSelected={last3MonthsSelected}
            onClick={() =>
              setRange({ from: threeMonthsFirstDay, to: lastMonthLastDay })
            }
          />
          <DateRangePill
            text="Current half year"
            isSelected={this6MonthsSelected}
            onClick={() => setRange({ from: sixMonthsFirstDay, to: today })}
          />
          <DateRangePill
            text="Current  year"
            isSelected={thisYearSelected}
            onClick={() => setRange({ from: firstDayYear, to: today })}
          />
        </div>
      </div>
      <div className="w-full flex flex-col p-4 bg-neutral-800 text-white rounded-b-20px">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <p className="w-1/3 text-center">
              {range?.from ? (
                dateToStr(range.from)
              ) : hoverDay && pickStartDate ? (
                <span className="text-neutral">{dateToStr(hoverDay)}</span>
              ) : (
                ""
              )}
            </p>
            <p className="w-1/3 text-center">{">"}</p>
            <p className="w-1/3 text-center">
              {range?.to ? (
                dateToStr(range.to)
              ) : hoverDay && !pickStartDate ? (
                <span className="text-neutral">{dateToStr(hoverDay)}</span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="gap-3 w-full flex">
            <Button
              variant="secondary"
              disabled={!range}
              size="md"
              onClick={() => {
                setRange({ from: today, to: today })
                setPickStartDate(true)
              }}
            >
              Reset to today
            </Button>
            <Button
              variant="primary"
              disabled={
                (!range?.from && range?.to !== undefined) ||
                (range?.from !== undefined && !range?.to)
              }
              size="md"
              className="grow"
              onClick={() => {
                console.log(range)
                props.onClose()
              }}
            >
              Use Range
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DateRangePicker
