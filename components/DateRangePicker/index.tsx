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

const dateToStr = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`

const DateRangePicker = (props: { onClose: () => void }) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined)
  const [pickStartDate, setPickStartDate] = useState(true)
  const [hoverDay, setHoverDay] = useState<Date | undefined>(undefined)

  const handleSelect: SelectRangeEventHandler = (
    _range: DateRange | undefined,
    selectedDay: Date,
    _activeModifiers: ActiveModifiers,
    _e: React.MouseEvent,
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
          },
    )
    setPickStartDate((prev) => !prev)
  }

  const today = new Date()
  const thisYear = today.getFullYear()
  const thisMonth = today.getMonth()

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
            startDate={new Date(thisYear, thisMonth, 1)}
            endDate={new Date(thisYear, thisMonth + 1, 0)}
            currentRange={{ from: range?.from, to: range?.to }}
            onClick={setRange}
          />
          <DateRangePill
            text="Previous month"
            startDate={new Date(thisYear, thisMonth - 1, 1)}
            endDate={new Date(thisYear, thisMonth, 0)}
            currentRange={{ from: range?.from, to: range?.to }}
            onClick={setRange}
          />
          <DateRangePill
            text="Last 3 months"
            startDate={new Date(thisYear, thisMonth - 3, 1)}
            endDate={new Date(thisYear, thisMonth, 0)}
            currentRange={{ from: range?.from, to: range?.to }}
            onClick={setRange}
          />
          <DateRangePill
            text="Current halfyear"
            startDate={new Date(thisYear, thisMonth - 6, 1)}
            endDate={today}
            currentRange={{ from: range?.from, to: range?.to }}
            onClick={setRange}
          />
          <DateRangePill
            text="Current year"
            startDate={new Date(thisYear, 0, 1)}
            endDate={today}
            currentRange={{ from: range?.from, to: range?.to }}
            onClick={setRange}
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
