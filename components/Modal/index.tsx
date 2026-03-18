import React from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export const ModalSizes = ["sm", "md", "lg"] as const
export type ModalSize = (typeof ModalSizes)[number]

interface BaseProps {
  size: ModalSize
  children: React.ReactNode
}

interface ModalPropsWithoutCloseButton extends BaseProps {
  onClose?: undefined
  returnUrl?: undefined
}

interface ModalPropsWithReturnUrl extends BaseProps {
  returnUrl: string
  onClose?: undefined
}

interface ModalPropsWithCloseHandler extends BaseProps {
  returnUrl?: undefined
  onClose: () => void
}

export type ModalProps =
  | ModalPropsWithoutCloseButton
  | ModalPropsWithReturnUrl
  | ModalPropsWithCloseHandler

export default function Modal({
  returnUrl,
  onClose,
  size,
  children,
}: ModalProps): JSX.Element {
  const outerWrapper = twMerge(
    "w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover",
  )

  const outerOverlay = "absolute bg-light opacity-80 inset-0 z-0"

  const innerBase =
    "w-full relative mx-auto my-auto rounded-xl shadow-lg bg-neutral-50"

  const innerSizeMap: Record<ModalSize, string> = {
    sm: "max-w-lg",
    md: "max-w-4xl",
    lg: "max-w-7xl",
  }

  const innerModal = twMerge(innerBase, size ? innerSizeMap[size] : "")

  const closeClass =
    "text-current text-2xl absolute px-3 py-2 right-0 top-0 cursor-pointer leading-none"

  const renderCloseButton = () => {
    if (returnUrl)
      return (
        <Link className={closeClass} to={returnUrl}>
          &times;
        </Link>
      )
    if (onClose)
      return (
        <div className={closeClass} onClick={onClose}>
          &times;
        </div>
      )
    return null
  }

  return (
    <div className={outerWrapper}>
      <div className={outerOverlay} />
      <div className={innerModal}>
        {renderCloseButton()}
        {children}
      </div>
    </div>
  )
}
