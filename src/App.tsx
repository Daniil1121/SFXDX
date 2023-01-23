import { useEffect, useRef } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Canvas from "./Components/otherComponents/Canvas";

function App() {
  const appRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={appRef} className="App">
      <Canvas appRef={appRef} />
      <header>
        <Header />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
