// import logo from './logo.svg';
import "./App.css";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

// import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
