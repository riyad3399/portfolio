import "./App.css";
import Bot from "./components/Bot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <Contact />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
