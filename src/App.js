// import logo from './logo.svg';
import "./App.css";
import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

// import { HashLink as Link } from "react-router-hash-link";

function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });

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
