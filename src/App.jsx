import "./App.css";
import About from "./components/About";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme/>
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
