import ScrollTopButton from "./components/ScrollTopButton"
import Section from "./components/Section"
import Suggestion from "./components/Suggestion"

function App() {
  return (
    <div>
      <Section title="Section 1" />
      <Section title="Section 2" dark />
      <Section title="Section 3" />
      <Section title="Section 4" dark />
      <Section title="Section 5" />
      <Section title="Section 6" dark />
      <ScrollTopButton />
      <Suggestion />
    </div>
  )
}

export default App
