import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Omeni from "./components/Omeni";
import Usluge from "./components/Usluge";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Usluge />
      <Omeni />
      <Portfolio />
    </>
  );
}

export default App;
