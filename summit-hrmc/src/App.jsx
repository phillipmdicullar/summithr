import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}

export default App;