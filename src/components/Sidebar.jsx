import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({open, setOpen}) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 transform transition-transform duration-300 bg-[#243B55] h-110 w-1/2 text-white rounded-r-xl backdrop-blur-md bg-[#243B55]/70
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="text-2xl ml-4 mt-4 text-[oklch(57.7%_0.245_27.325)]"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col gap-4 text-center items-center mt-16 gap-5 text-xl font-semibold underline ">
        <a href="#home" className="px-4 py-2 rounded-md hover:bg-sky-500" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" className="px-4 py-2 rounded-md hover:bg-sky-500" onClick={() => setOpen(false)}>About</a>
        <a href="#services" className="px-4 py-2 rounded-md hover:bg-sky-500" onClick={() => setOpen(false)}>Services</a>
        <a href="#projects" className="px-4 py-2 rounded-md hover:bg-sky-500" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" className="px-4 py-2 rounded-md hover:bg-sky-500" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
}
