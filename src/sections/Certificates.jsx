import { useState } from "react";
import dev from "../assets/images/dev.png";
import dsa from "../assets/images/dsa.png";

export default function Certificates() {
  const certificates = [dev, dsa];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section
      id="certificates"
      className="py-20 text-white text-center bg-[oklch(28.2%_0.091_267.935)]/70"
    >
      <h2 className="text-4xl font-bold mb-10">
        My <span className="text-cyan-400">Certificates</span>
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 text-xl bg-cyan-400/10  
           hover:bg-cyan-400/30 
          hover:shadow-[0_0_15px_#22d3ee] transition"
        >
          ⬅
        </button>

        {/* Image */}
        <img
          src={certificates[index]}
          alt="certificate"
          className="w-80 rounded-xl border border-cyan-400/20 
          hover:scale-105 hover:border-cyan-400 
          hover:shadow-[0_0_15px_#22d3ee] transition"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 text-xl bg-cyan-400/10 
          hover:bg-cyan-400/30 
          hover:shadow-[0_0_15px_#22d3ee] transition"
        >
          ➡
        </button>
      </div>
    </section>
  );
}
