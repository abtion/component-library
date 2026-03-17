import React from "react"
import { twMerge } from "tailwind-merge"

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

export default function ModalContent({
  children,
  className,
}: ModalContentProps): JSX.Element {
  const base = "p-4 flex-auto justify-center"
  const usedClassName = twMerge(base, className ?? "")
  return <div className={usedClassName}>{children}</div>
}
