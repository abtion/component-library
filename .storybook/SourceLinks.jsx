import { useContext, useRef, useState } from "react"
import { DocsContext } from "@storybook/blocks"
import FolderArrowDownIcon from "@heroicons/react/20/solid/FolderArrowDownIcon"

const componentFolders = {
  Rails: "app/javascript/components",
  "Next.js": "components",
}

export default function SourceLinks() {
  const [framework, setFramework] = useState("Rails")
  const [copied, setCopied] = useState(false)
  const componentFolder = componentFolders[framework]
  const copiedTimeoutRef = useRef(null)

  const {
    attachedCSFFile: {
      meta: { component },
    },
  } = useContext(DocsContext)

  if (!component) {
    return null
  }

  const { displayName: name } = component
  const gitSource = `https://github.com/abtion/component-library/blob/main/components/${name}`

  const zip =
    require(`!!file-loader?name=[folder].zip!./zip-folder-loader.js!~/components/${name}/index.tsx`).default

  const dlCommand = `curl -L ${location.origin}/${zip} -o c.zip && unzip -o c.zip -d ${componentFolder} && rm c.zip`

  const handleDlCommandCopy = () => {
    clearTimeout(copiedTimeoutRef.current)
    setCopied(true)
    navigator.clipboard.writeText(dlCommand)

    copiedTimeoutRef.current = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className="sb-unstyled">
        <ol className="sb-unstyled flex items-center list-none gap-2 mx-2">
          {Object.keys(componentFolders).map((tabFramework) => {
            return (
              <li
                key={tabFramework}
                className={`sb-unstyled text-sm font-bold rounded-t px-4 py-1 border-[1px] border-neutral-200 shadow ${
                  framework === tabFramework
                    ? "bg-neutral-800 text-light border-neutral-900"
                    : "cursor-pointer text-neutral-700"
                }`}
                onClick={() => setFramework(tabFramework)}
              >
                {tabFramework}
              </li>
            )
          })}
          <li key="github" className="ml-2">
            <a href={gitSource} target="_BLANK">
              <img src="github.svg" className="w-4 h-4" />
            </a>
          </li>
          <li key="zip">
            <a href={zip}>
              <FolderArrowDownIcon className="w-5 h-5 text-neutral-600" />
            </a>
          </li>
        </ol>
        <pre className="sb-unstyled font-mono font-medium whitespace-pre-wrap relative py-6 px-6 text-xs rounded bg-neutral-800 text-light shadow">
          {dlCommand}
          <button
            onClick={handleDlCommandCopy}
            className="text-xs text-neutral-300 border-b-4 border-black font-bold bg-black shadow px-[6px] pt-1 rounded-tl rounded-br block absolute bottom-0 right-0 focus:border-primary-500"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </pre>
      </div>
    </>
  )
}
