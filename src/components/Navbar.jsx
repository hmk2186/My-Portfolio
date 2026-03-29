import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/General.css";
import Sidebar from "./Sidebar";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 w-full flex z-50 items-center  p-4 backdrop-blur-md bg-[oklch(28.2%_0.091_267.935)]/70 text-white">
        <button onClick={() => setOpen(true)} className="text-2xl">
          <FaBars />
        </button>
        <h2 className="mx-8 text-2xl font-bold ">
          Het{" "}
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Kanjariya
          </span>
        </h2>
      </nav>
      <Sidebar open={open} setOpen={setOpen}/>
      
    </>
  );
}
