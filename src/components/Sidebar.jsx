import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({open, setOpen}) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 transform transition-transform duration-300 bg-indigo-900/50 h-140 w-1/2 text-white rounded-r-xl backdrop-blur-md bg-indigo-900/50
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="text-2xl ml-4 mt-4 text-white"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col gap-8 text-center items-center mt-12  text-xl font-semibold underline ">
        <a href="#home" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Projects</a>
        <a href="#services" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Services</a>
        <a href="#certificates" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Certificates</a>
        <a href="#contact" className="text-slate-200 hover:text-sky-400 transition duration-300" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
}
