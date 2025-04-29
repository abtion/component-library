import JSZip from "jszip"
import { sync } from "glob"
import { readFileSync } from "fs"
import { join, basename, dirname } from "path"

export default function () {
  const callback = this.async()
  const zip = new JSZip()

  const processDirectory = (dirPath) => {
    sync("**/*", { cwd: dirPath, nodir: true }).forEach((file) => {
      const filePath = join(dirPath, file)
      zip.file(basename(dirPath) + "/" + file, readFileSync(filePath, "utf-8"))
    })
  }

  processDirectory(dirname(this.resourcePath))

  zip
    .generateAsync({ type: "nodebuffer" })
    .then((buffer) => {
      callback(null, buffer)
    })
    .catch((err) => {
      callback(err)
    })
}
