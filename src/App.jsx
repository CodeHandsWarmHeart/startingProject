import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  function handleSelect() {
    console.log("max");
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClickProp={handleSelect}>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>States</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
