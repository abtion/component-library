import LockIcon from "@heroicons/react/20/solid/LockClosedIcon"
import React, {
  createRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"

type CodeInputProps = {
  deliveryMethod?: "SMS" | "Email"
  className?: string
  listenForOTC: boolean
}

const focusInputByRef = (inputRef: React.RefObject<HTMLInputElement>) => {
  const inputElement = inputRef.current
  if (inputElement) {
    inputElement.focus()
    inputElement.select()
  }
}

export const CodeInput = forwardRef<HTMLDivElement, CodeInputProps>(
  ({ deliveryMethod, className, listenForOTC }: CodeInputProps, ref) => {
    const [code, setCode] = useState<string[]>(Array(6).fill(""))

    const otcAbortControllerRef = useRef<AbortController>()
    const inputRefs = useRef<React.RefObject<HTMLInputElement>[]>(
      Array(6)
        .fill("*")
        .map(() => createRef<HTMLInputElement>())
    ).current

    const handleDigitChange = (
      index: number,
      event: React.FormEvent<HTMLInputElement>
    ) => {
      const {
        currentTarget: { value: string },
      } = event
      const charsToInsert = string.substring(0, 6 - index).split("")
      const newValue = [...code]
      newValue.splice(index, charsToInsert.length, ...charsToInsert)
      setCode(newValue)
      focusInputByRef(inputRefs[Math.min(5, index + charsToInsert.length)])
    }

    const handleKeyDown = (
      index: number,
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      switch (event.key) {
        case "ArrowLeft": {
          event.preventDefault()
          focusInputByRef(inputRefs[Math.max(0, index - 1)])
          break
        }
        case "ArrowRight": {
          event.preventDefault()
          focusInputByRef(inputRefs[Math.min(5, index + 1)])
          break
        }
        case "Backspace": {
          event.preventDefault()
          const newValue = [...code]
          newValue[index] = ""
          setCode(newValue)
          focusInputByRef(inputRefs[Math.max(0, index - 1)])
          break
        }
      }
    }

    useEffect(() => {
      if (!listenForOTC) return
      if (!("OTPCredential" in window)) return
      const abortController = new AbortController()
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: abortController.signal,
        })
        .then((otp) => {
          if (otp) setCode(otp.code.split(""))
        })
        .catch((error) => {
          if (error?.message === "Aborted") return
          console.error(error)
        })
      otcAbortControllerRef.current = abortController

      return () => otcAbortControllerRef.current?.abort(new Error("Aborted"))
    }, [listenForOTC, setCode])

    return (
      <>
        <div
          className={`flex h-20 bg-neutral-100 relative border-t border-b border-neutral-300 ${
            className ?? ""
          }`}
          ref={ref}
        >
          <label
            htmlFor="digit1"
            className="px-5 flex items-center justify-center"
          >
            <LockIcon name="lock" className="w-6 h-6" />
            <div>
              <span className="hidden lg:block self-center pl-5 pr-12 text-sm whitespace-nowrap text-neutral-500">
                Write your code
              </span>
              <span className="hidden lg:block self-center pl-5 pr-12 text-xs whitespace-nowrap text-neutral-400">
                Code delivered by{" "}
                {`${deliveryMethod === "SMS" ? "sms" : "e-mail"}`}
              </span>
            </div>
          </label>
          <div className="grid grid-cols-6 grow text-sm text-neutral-500">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                type="text"
                id={`digit${index}`}
                placeholder="*"
                pattern="[a-z0-9]"
                autoCapitalize="none"
                className="border-l border-neutral-300 text-center bg-neutral-100 focus:z-10 focus:placeholder:text-transparent"
                onFocus={(event) => event.target.select()}
                autoComplete="one-time-code"
                onInput={(event) => handleDigitChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={inputRefs[index]}
                value={code[index]}
              />
            ))}
          </div>
        </div>
        <span className="block lg:hidden self-center text-center my-2 text-xs whitespace-nowrap text-neutral-400">
          Code delivered by {`${deliveryMethod === "SMS" ? "sms" : "e-mail"}`}
        </span>
      </>
    )
  }
)
CodeInput.displayName = "CodeInput"
