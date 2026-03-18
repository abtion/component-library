import React, { useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon"
import { twMerge } from "tailwind-merge"

export enum Sizes {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export default function Dropdown({
  active,
  onClickAction,
  options,
  size = Sizes.Large,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const dropdownBase = "relative cursor-pointer w-auto"
  const dropdownSizeMap: Record<Sizes, string> = {
    [Sizes.Large]: "min-w-[200px]",
    [Sizes.Medium]: "",
    [Sizes.Small]: "",
  }

  const buttonBase =
    "bg-neutral-50 w-full h-full pr-7 pl-1 py-1 border border-solid border-neutral-500 rounded-lg relative inline-flex mx-auto capitalize items-center justify-between"
  const buttonSizeMap: Record<Sizes, string> = {
    [Sizes.Large]: "",
    [Sizes.Medium]: "",
    [Sizes.Small]: "h-8 pt-[5px] w-[70px] pl-1 pb-1 text-sm",
  }

  const optionsBase =
    "absolute left-0 bg-neutral-50 capitalize border border-solid border-neutral-500 rounded-lg shadow p-1 mx-auto w-full overflow-y-scroll z-50 max-h-[calc(40px*10+16px)]"
  const optionsSizeMap: Record<Sizes, string> = {
    [Sizes.Large]: "top-6",
    [Sizes.Medium]: "top-6",
    [Sizes.Small]: "top-5 w-[70px]",
  }

  const optionBase = "-mx-1 px-1 py-1 hover:bg-primary-50"
  const optionSizeMap: Record<Sizes, string> = {
    [Sizes.Large]: "",
    [Sizes.Medium]: "",
    [Sizes.Small]: "text-sm",
  }

  const arrowBase = "absolute right-1"
  const arrowSizeMap: Record<Sizes, string> = {
    [Sizes.Large]: "top-2",
    [Sizes.Medium]: "top-2",
    [Sizes.Small]: "top-1.5",
  }

  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })

  const selectOption = (option: OptionObject) => {
    onClickAction(option)
    setIsOpen(false)
  }

  const dropdownClasses = twMerge(dropdownBase, dropdownSizeMap[size], "")

  const buttonClasses = (isActive: boolean) =>
    twMerge(buttonBase, buttonSizeMap[size], isActive ? "border-primary" : "")

  const optionsClasses = twMerge(optionsBase, optionsSizeMap[size])

  const arrowClasses = twMerge(arrowBase, arrowSizeMap[size])

  const optionClasses = (optionKey: string, isSelected: boolean) =>
    twMerge(optionBase, optionSizeMap[size], isSelected ? "bg-light" : "")

  return (
    <div className="h-52">
      <div className={dropdownClasses} ref={ref}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={buttonClasses(isOpen)}
        >
          <span className="truncate">{active?.text}</span>
          <div className={arrowClasses}>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        {isOpen && (
          <div className={optionsClasses}>
            {options.map((option: OptionObject, index: number) => (
              <div
                key={index}
                className={optionClasses(
                  option.key,
                  option.key === active?.key,
                )}
                onClick={() => selectOption(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export interface OptionObject {
  key: string
  text: string
}
export interface DropdownProps {
  active: OptionObject | undefined
  onClickAction: (value: OptionObject) => void
  options: OptionObject[]
  size?: Sizes
}
