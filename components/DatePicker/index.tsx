import React, { ChangeEventHandler, useRef, useState } from "react"

import { format, isValid, parse } from "date-fns"
import { DayPicker, SelectSingleEventHandler } from "react-day-picker"
import "./index.scss"

export enum Mode {
  default = "default",
  single = "single",
  range = "range",
  multipe = "multiple",
}
export type DatePickerProps = {
  mode: Mode
}

export default function DatePicker(props: DatePickerProps) {
  const [selected, setSelected] = useState<Date>()
  const [value, setValue] = useState<string>("")

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    setSelected(date)
    if (date) {
      setValue(format(date, "y-MM-dd"))
    } else {
      setValue("")
    }
  }

  return (
    <div>
      <div>{value}</div>
      <DayPicker
        mode={props.mode}
        defaultMonth={selected}
        selected={selected}
        onSelect={handleDaySelect}
      />
    </div>
  )
}
