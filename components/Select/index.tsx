import React from "react"
import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon"
import { default as ReactSelect } from "react-select"
import { twMerge } from "tailwind-merge"

export type SelectProps = Omit<Parameters<ReactSelect>[0], "classNames"> & {
  classNames?: {
    container?: string
    control?: string
    input?: string
    menu?: string
    option?: string
    multiValues?: string
  }
}

const Select = ({ classNames, ...props }: SelectProps) => {
  return (
    <ReactSelect
      unstyled
      components={{
        DropdownIndicator: () => (
          <ChevronDownIcon className="h-5 w-5 text-neutral-400" />
        ),
        IndicatorSeparator: null,
      }}
      classNames={{
        container: () => twMerge("w-60", classNames?.container),
        control: (state) => {
          const value = state.getValue()
          const controlBase =
            "border text-sm leading-4 focus:ring-1 focus:outline-none shadow-sm border-neutral-300 rounded-md pl-5 pr-3"
          const focused = state.isFocused
            ? "ring-primary-400 border-primary-400"
            : ""
          const disabled = state.isDisabled ? "text-neutral-400" : ""
          const multiFilled =
            state.isMulti && Boolean(value && value.length) ? "pl-1" : ""
          return twMerge(
            controlBase,
            focused,
            disabled,
            multiFilled,
            classNames?.control,
          )
        },
        input: () => twMerge("py-2", classNames?.input),
        menu: () =>
          twMerge(
            "border leading-4 focus:ring-1 focus:outline-none shadow-sm mt-1 border-neutral-300 rounded-md py-1 w-60",
            classNames?.menu,
          ),
        option: (state) =>
          twMerge(
            "px-5 py-2 text-sm",
            state.isFocused ? "bg-primary-100 text-primary-100-contrast" : "",
            state.isSelected ? "bg-primary-500 text-primary-500-contrast" : "",
            classNames?.option,
          ),
        multiValue: () =>
          twMerge(
            "text-sm rounded-md px-2 py-1 my-[0.175rem] mr-1 w-max bg-primary-500 text-primary-500-contrast",
            classNames?.multiValues,
          ),
      }}
      {...props}
    />
  )
}

export default Select
