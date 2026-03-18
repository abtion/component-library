import React from "react"
import { twMerge } from "tailwind-merge"

export interface CardProps {
  icon: JSX.Element
  name: string
  description: string
  isDark?: boolean
  learnMoreUrl?: string
  children: React.ReactNode
}

export default function Card({
  icon,
  name,
  description,
  isDark = false,
  learnMoreUrl,
  children,
}: CardProps): JSX.Element {
  const productCardClassName = twMerge(
    "bg-light rounded-xl p-3",
    isDark ? "bg-dark" : "",
  )

  const titleClassName = twMerge(
    "mt-1 flex-none font-normal text-2xl",
    isDark ? "text-light" : "",
  )

  const descriptionClassName = twMerge(
    "pt-3 text-neutral-700",
    isDark ? "text-primary-600" : "",
  )

  const learnMoreClassName = twMerge(
    "underline whitespace-nowrap font-medium text-neutral-700 hover:text-neutral-600",
    isDark ? "text-primary-600 hover:text-primary-500" : "",
  )

  return (
    <div className={productCardClassName}>
      <div className="flex flex-col h-full">
        <div className="w-8 h-8">{icon}</div>

        <h2 className={titleClassName}>{name}</h2>

        <div className="flex flex-1 ">
          <span className={descriptionClassName}>
            {description}

            {learnMoreUrl ? (
              <>
                {" "}
                <a href={learnMoreUrl} className={learnMoreClassName}>
                  Learn more &gt;
                </a>
              </>
            ) : null}
          </span>
        </div>
        <div className="items-center flex justify-between h-4">{children}</div>
      </div>
    </div>
  )
}
