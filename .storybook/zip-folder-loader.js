const JSZip = require("jszip")
const glob = require("glob")
const fs = require("fs")
const path = require("path")

module.exports = function () {
  const callback = this.async()
  const zip = new JSZip()

  const processDirectory = (dirPath) => {
    glob.sync("**/*", { cwd: dirPath, nodir: true }).forEach((file) => {
      const filePath = path.join(dirPath, file)
      zip.file(
        path.basename(dirPath) + "/" + file,
        fs.readFileSync(filePath, "utf-8"),
      )
    })
  }

  processDirectory(path.dirname(this.resourcePath))

  zip
    .generateAsync({ type: "nodebuffer" })
    .then((buffer) => {
      callback(null, buffer)
    })
    .catch((err) => {
      callback(err)
    })
}
