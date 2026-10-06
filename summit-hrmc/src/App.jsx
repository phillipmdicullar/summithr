import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import WhyChooseUs from "./sections/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default App;