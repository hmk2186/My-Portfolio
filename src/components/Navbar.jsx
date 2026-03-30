import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/General.css";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 w-full flex z-50 items-center  md:justify-evenly p-4 backdrop-blur-md bg-[oklch(28.2%_0.091_267.935)]/70 text-white">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl md:hidden lg:hidden"
        >
          <FaBars />
        </button>
        <h2 className="mx-4 md:mx-8 text-2xl md:text-3xl lg:text-3xl font-bold ">
          Het{" "}
          <span className="text-2xl md:text-3xl lg:text-3xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Kanjariya
          </span>
        </h2>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 md:gap-10 text-lg font-semibold">
          <a href="#home" className="hover:text-sky-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-sky-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-sky-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-sky-400 transition">
            Projects
          </a>
          <a href="#services" className="hover:text-sky-400 transition">
            Services
          </a>
          <a href="#certificates" className="hover:text-sky-400 transition">
            Certificates
          </a>
          <a href="#contact" className="hover:text-sky-400 transition">
            Contact
          </a>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
