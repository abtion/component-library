export function getUniqueFilename(files: File[], newFile: File) {
  const originalName = newFile.name
  const nameParts = originalName.split(".")
  const extension = nameParts.length > 1 ? `.${nameParts.pop()}` : ""
  const baseName = nameParts.join(".")

  let uniqueName = originalName
  let counter = 1
  const fileExists = (name: string) => files.some((file) => file.name === name)

  while (fileExists(uniqueName)) {
    uniqueName = `${baseName}_${counter}${extension}`
    counter++
  }

  return uniqueName
}
