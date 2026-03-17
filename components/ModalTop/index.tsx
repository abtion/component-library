import React from "react"
import { twMerge } from "tailwind-merge"

interface ModalTopProps {
  children: React.ReactNode
  className?: string
}

export default function ModalTop({
  children,
  className,
}: ModalTopProps): JSX.Element {
  const base = "border-b border-solid border-neutral-300 py-2 px-4"
  const contentClass = "text-neutral-900 font-medium"
  const usedClassName = twMerge(base, className ?? "")

  return (
    <div className={usedClassName}>
      <div className={contentClass}>{children}</div>
    </div>
  )
}
