import React, { useState } from "react"
import IconMagnifyingGlass from "@heroicons/react/20/solid/MagnifyingGlassIcon"

import "./index.scss"

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

  return (
    <form className="SearchInput" onSubmit={onSubmit}>
      <input
        placeholder={placeholder}
        className="SearchInput__input"
        value={search}
        onChange={onChange}
        {...restInputProps}
      />
      <button className="SearchInput__magnifier">
        <IconMagnifyingGlass />
      </button>
    </form>
  )
}
