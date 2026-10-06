import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stats from "./sections/Stats";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
      </main>
    </>
  );
}

export default App;