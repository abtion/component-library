import React, { useState } from "react"
import IconMagnifyingGlass from "@heroicons/react/20/solid/MagnifyingGlassIcon"
import { twMerge } from "tailwind-merge"

export interface SearchInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  searchPhrase: (search: string) => void
  initialValue: string
  placeholder?: string
}

export default function SearchInput({
  searchPhrase,
  initialValue,
  placeholder = "Search",
  ...restInputProps
}: SearchInputProps): JSX.Element {
  const [search, setSearch] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value)

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    searchPhrase(search)
  }

  // Extract any className provided for the input so we can merge it with defaults
  const { className, ...inputProps } = restInputProps as {
    className?: string
    [key: string]: any
  }

  const formBase =
    "flex items-center max-w-xs pl-2 overflow-hidden border border-solid border-neutral rounded-lg"
  const inputBase = "font-light rounded-lg focus:outline-none h-8 grow px-2"
  const magnifierBase = "p-1 h-8 w-8 cursor-pointer rounded hover:bg-primary-50"
  const svgBase = "m-auto"

  const inputClassName = twMerge(inputBase, className ?? "")
  const formClassName = formBase

  return (
    <form className={formClassName} onSubmit={onSubmit}>
      <input
        placeholder={placeholder}
        className={inputClassName}
        value={search}
        onChange={onChange}
        {...inputProps}
      />
      <button type="submit" className={magnifierBase} aria-label="Search">
        <IconMagnifyingGlass className={svgBase} />
      </button>
    </form>
  )
}
