import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Projects />
        <Contact />
        <Footer /> */}
      </main>
    </>
  );
}

export default App;