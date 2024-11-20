import React from "react"
import CloudIcon from "@heroicons/react/24/solid/CloudArrowUpIcon"
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon"
import { DragEvent, useEffect, useState } from "react"
import { getUniqueFilename } from "./uniqueFilename"
import FileInput from "../FileInput"

interface FileDragAndDropProps extends React.HTMLAttributes<HTMLDivElement> {
  onFilesChange?: (files: File[]) => void
  onErrors?: (error: string) => void
}

const allowedFileTypes = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "image/bmp",
  "image/webp",
  "application/pdf",
  ".xls",
  ".xlsx",
  ".doc",
  ".docx",
  "text/csv",
]
const MAX_SIZE_BYTES = 10 * 1024 * 1024 // 10 MB in bytes
const MAX_FILES_NO = 8

export const FileDragAndDrop = (props: FileDragAndDropProps) => {
  const { onFilesChange, onErrors, ...restProps } = props
  const [isOver, setIsOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<string>("")

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(true)
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(false)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsOver(false)
    const droppedFiles = Array.from(event.dataTransfer.files)
    sanitizeAddFiles(droppedFiles)
  }

  // Check file type/size and number of files allowed
  const sanitizeAddFiles = (newFiles: File[]) => {
    setErrors("")
    const filesToAdd: File[] = []
    newFiles.forEach((f) => {
      if (f.size > MAX_SIZE_BYTES)
        setErrors(
          `${f.name} - overstiger max filstørrelse (${
            MAX_SIZE_BYTES / 1024 / 1024
          } MB)`
        )
      else if (files.length + filesToAdd.length >= MAX_FILES_NO)
        setErrors(`Max antal filer overskredet (${MAX_FILES_NO})`)
      else
        filesToAdd.push(
          new File([f], getUniqueFilename([...filesToAdd, ...files], f), {
            type: f.type,
            lastModified: f.lastModified,
          })
        )
    })
    setFiles((prev) => [...prev, ...filesToAdd])
  }

  useEffect(() => {
    onFilesChange?.(files)
  }, [files, onFilesChange])

  useEffect(() => onErrors?.(errors), [errors, onErrors])

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full justify-center flex flex-col items-center rounded-10px border ${
          isOver ? "bg-primary-200" : "bg-white"
        }`}
        {...restProps}
      >
        <div className="flex flex-col items-center my-4">
          <CloudIcon className="w-[60px] h-[60px] text-neutral-500 mb-4" />
          <div className="flex gap-1">
            <p className="text-neutral">Drag files here or</p>
            <FileInput
              onChangeHandler={(files) => sanitizeAddFiles(files)}
              className="hidden"
              allowedFileTypes={allowedFileTypes}
              element={<p className="underline underline-offset-4">browse</p>}
            />
          </div>
          <p className="text-neutral">Max 10 mb per file</p>
        </div>
        <div className="flex flex-col w-full">
          {files.length > 0 ? (
            files.map((f, i) => (
              <div
                key={i}
                className="px-5 py-2.5 flex justify-between items-center"
              >
                <p className="w-11/12">{f.name}</p>
                <div className="h-6 w-6">
                  <XCircleIcon
                    className="cursor-pointer w-full h-full"
                    onClick={() => {
                      setErrors("")
                      setFiles((prev) => prev.filter((p) => p.name !== f.name))
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}
