import Navbar from "./components/Navbar";
import About from "./pages/About";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";


import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
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
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;