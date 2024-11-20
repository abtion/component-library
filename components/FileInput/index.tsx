import React, { ReactElement, useRef } from "react"
import classNames from "classnames"

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChangeHandler: (files: File[]) => void
  inputId: string
  element: ReactElement
}

export default function FileInput(props: FileInputProps): JSX.Element {
  const { onChangeHandler, inputId, element, className, ...restInputProps } =
    props

  const usedClassName = classNames("Button", className)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return
    onChangeHandler(Array.from(event.target.files))
    // https://stackoverflow.com/questions/19643265/second-use-of-input-file-doesnt-trigger-onchange-anymore/56258902#56258902
    event.target.value = ""
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        name="file"
        onChange={changeHandler}
        className={usedClassName}
        id={inputId}
        accept="audio/*,video/*,image/*,.csv,.pdf,.xlsx,.xsl, .docx, .doc, .zip, .rar"
        multiple
        data-testid="file-upload-id"
        {...restInputProps}
      />
      <div
        className={
          restInputProps.disabled ? "cursor-not-allowed" : "cursor-pointer"
        }
        onClick={() => inputRef?.current?.click()}
      >
        {element}
      </div>
    </>
  )
}
