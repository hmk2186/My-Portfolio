import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "../sections/Home";
import About from "../sections/About";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Portfolio() {
  return (
    <div className="bg-[oklch(28.2%_0.091_267.935)]">
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}
