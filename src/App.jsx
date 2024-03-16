import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Roadmap from "./components/Roadmap";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Benefits />} />
          <Route path="/how-to-use" element={<Collaboration />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Roadmap" element={<Roadmap />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </BrowserRouter>
  );
};

export default App;
