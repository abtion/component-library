import classNames from "classnames"
import React, { useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon"
import "./index.scss"

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
  const optionClasses = (option: string) => {
    return classNames("Dropdown__option", {
      ["Dropdown__active"]: option == active?.key,
      [`Dropdown__option--${size}`]: size,
    })
  }
  const dropdownClasses = classNames("Dropdown", {
    [`Dropdown--${size}`]: size,
  })

  const buttonClasses = classNames("Dropdown__button", {
    "Dropdown__button-active": isOpen,
    [`Dropdown__button--${size}`]: size,
  })

  const optionsClasses = classNames("Dropdown__options", {
    [`Dropdown__options--${size}`]: size,
  })

  const arrowClasses = classNames("Dropdown__button-arrow", {
    [`Dropdown__button-arrow--${size}`]: size,
  })

  useOnClickOutside(ref, () => {
    setIsOpen(false)
  })

  const selectOption = (option: OptionObject) => {
    onClickAction(option)
    setIsOpen(false)
  }
  return (
    <div className="h-52">
      <div className={dropdownClasses} ref={ref}>
        <div onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
          <span>{active?.text}</span>
          <div className={arrowClasses}>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        {isOpen && (
          <div className={optionsClasses}>
            {options.map((option: OptionObject, index: number) => (
              <div
                key={index}
                className={optionClasses(option.key)}
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
