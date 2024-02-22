import React from "react"
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon"
import { default as ReactSelect } from "react-select"
import classNames from "classnames"
import "./index.scss"

export type SelectProps = Parameters<ReactSelect>[0]

const Select = (props: SelectProps) => {
  return (
    <ReactSelect
      unstyled
      components={{
        DropdownIndicator: () => (
          <ChevronDownIcon className="Select__indicator" />
        ),
        IndicatorSeparator: null,
      }}
      classNames={{
        container: () => "Select",
        control: (state) => {
          const value = state.getValue()
          return classNames("Select__control", {
            "Select__control--focused": state.isFocused,
            "Select__control--disabled": state.isDisabled,
            "Select__control--multi": state.isMulti,
            "Select__control--filled": Boolean(value && value.length),
          })
        },
        input: () => "Select__input",
        menu: () => "Select__menu",
        option: (state) =>
          classNames("Select__option", {
            "Select__option--selected": state.isSelected,
            "Select__option--focused": state.isFocused,
          }),
        multiValue: () => "Select__multi-value",
      }}
      {...props}
    />
  )
}

export default Select
