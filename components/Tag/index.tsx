import React from "react"
import { twMerge } from "tailwind-merge"
import XMarkIcon from "@heroicons/react/20/solid/XMarkIcon"

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  onClose?: () => void
}

export default function Tag(props: TagProps): JSX.Element {
  const { onClose, text, className, ...rest } = props

  const base = "text-sm rounded-md px-3 py-1 w-max bg-neutral-200"
  const closable = onClose ? "relative pr-7" : ""
  const usedClassName = twMerge(base, closable, className ?? "")

  return (
    <div className={usedClassName} {...rest}>
      {text}
      {onClose && (
        <button
          className="p-2 absolute right-0 top-0 cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          <XMarkIcon className="w-3 h-3" />
        </button>
      )}
    </div>
  )
}
