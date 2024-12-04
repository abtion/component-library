import React from "react"
import classNames from "classnames"

import "./index.scss"

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
  const productCardClassName = classNames(
    "ProductCard",
    isDark && "ProductCard--dark",
  )
  const titleClassName = classNames(
    "ProductCard__title",
    isDark && "ProductCard__title--dark",
  )
  const descriptionClassName = classNames(
    "ProductCard__description",
    isDark && "ProductCard__description--dark",
  )
  const learnMoreClassName = classNames(
    "ProductCard__learnMore",
    isDark && "ProductCard__learnMore--dark",
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
