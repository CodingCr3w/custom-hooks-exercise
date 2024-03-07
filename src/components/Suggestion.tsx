import * as React from "react"
import clsx from "clsx"

import { isWindowFullyScrolled } from "../helpers/scroll"

export default function Suggestion() {
  // Est-on en bas de page ?
  const [atBottom, setIsAtBottom] = React.useState(false)

  // Création d'un event listener pour le scroll
  React.useEffect(() => {
    function scrollListener() {
      // Ici on précise un "offset" pour que le bas de page commence
      // 1000px plus haut (la suggestion s'affichera plus tôt)
      setIsAtBottom(isWindowFullyScrolled(1000))
    }

    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  return (
    <div
      className={clsx(
        "fixed left-8 bottom-8 rounded-lg", // position
        "inline p-4 shadow-lg bg-blue-800 text-white w-72", // style
        "transition-all ease-in-out duration-500", // animation fade in & out
        !atBottom && "opacity-0 pointer-events-none" // invisible et non clickable sauf en bas de page
      )}
    >
      <h3 className="text-xl">Liked what you read ?</h3>
      <p>
        Here's something you might like too :{" "}
        <a
          href="https://youtu.be/dQw4w9WgXcQ"
          className="underline text-slate-300"
        >
          Some article
        </a>
      </p>
    </div>
  )
}
