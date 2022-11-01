import * as React from "react"
import clsx from "clsx"

import UpArrow from "../icons/UpArrow"
import { isWindowFullyScrolled } from "../helpers/scroll"

export default function ScrollTopButton() {
  // Ce state va nous permettre de savoir si, à un instant t,
  // l'utilisateur se trouve tout en bas de la page
  const [atBottom, setIsAtBottom] = React.useState(false)

  // Création d'un event listener pour le scroll
  React.useEffect(() => {
    function scrollListener() {
      // On fait appel à un helper pour savoir si la fenêtre est
      // "scrollée" jusqu'à tout en bas
      // 💡 Si on fait un `setState(true)` et que le state était déjà à true,
      //    alors React ne déclenche pas de re-render
      setIsAtBottom(isWindowFullyScrolled())
    }

    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed right-8 bottom-8", // position
        "bg-blue-800 text-2xl text-white rounded-full p-4 shadow-lg", // style
        "transition-all ease-in-out duration-500", // animation fade in & out
        !atBottom && "opacity-0 pointer-events-none" // invisible et non clickable, sauf en bas de page
      )}
    >
      <UpArrow />
    </button>
  )
}
