import React, { useEffect, useState } from "react"
import "./index.scss"
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon"
import { default as ReactSelect, createFilter } from "react-select"
export type OptionType = {
  value: string
  label: string
}

const Select = (props: SelectProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState<OptionType | null>(null)
  const [isSearchable, setIsSearchable] = useState(true)

  useEffect(() => {
    if (props.options.length == 0) return setIsLoading(true)
    else setIsLoading(false)

    if (!props.manualActive) setValue(props.options[0])
    else setValue(props.manualActive)
  }, [props.options, props.manualActive])

  useEffect(() => {
    if (!value) return
    props.setActive(value)
  }, [value])

  useEffect(() => {
    setIsSearchable(!props.disableSearch)
  }, [props.disableSearch])

  const customStyles = {
    menu: (
      provided: Record<string, unknown>,
      _state: Record<string, unknown>
    ) => ({
      ...provided,
      borderRadius: "0.5rem",
      borderColor: "#808080",
    }),
    option: (
      provided: Record<string, unknown>,
      state: Record<string, unknown>
    ) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F5F7F9" : "#FFF",
      color: "#4D4D4D",
      "&:hover": {
        backgroundColor: "#E9F6F5",
        color: "#000",
        cursor: "pointer",
      },
    }),
    control: (
      provided: Record<string, unknown>,
      state: Record<string, unknown>
    ) => ({
      ...provided,
      borderRadius: "0.5rem",
      borderColor: state.isFocused
        ? /* istanbul ignore next */
          "#26A697"
        : "#B1B1B1",
      boxShadow: null,
      width: 200,
      height: 42,
      "&:hover": {
        borderColor: "#26A697",
        cursor: "pointer",
      },
    }),
  }

  return (
    <div data-testid={props.testId || "infare-select"}>
      <ReactSelect
        components={{
          DropdownIndicator: () => (
            <span className="mr-1">
              <ChevronDownIcon />
            </span>
          ),
          IndicatorSeparator: () => null,
        }}
        filterOption={createFilter({
          ignoreAccents: false,
          matchFrom: "start",
        })}
        isLoading={isLoading}
        isSearchable={isSearchable}
        // @ts-expect-error testing
        styles={customStyles}
        options={props.options}
        value={value}
        // @ts-expect-error testing
        onChange={(option: OptionType) => setValue(option)}
      />
    </div>
  )
}

export default Select

export interface SelectProps {
  options: OptionType[]
  setActive: (value: OptionType) => void
  disableSearch?: boolean
  manualActive?: OptionType
  testId?: string
}
