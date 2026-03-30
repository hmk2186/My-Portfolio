import { useState } from "react";
import dev from "../assets/images/dev.png";
import dsa from "../assets/images/dsa.png";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

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
    // <section
    //   id="certificates"
    //   className="py-20 text-white text-center bg-[oklch(28.2%_0.091_267.935)]/70 md:h-[720px]"
    // >
    //   <h2 className="text-4xl font-bold mb-10">
    //     My <span className="text-cyan-400">Certificates</span>
    //   </h2>

    //   <div className="relative flex items-center justify-center">
    //     {/* Image */}
    //     <img
    //       src={certificates[index]}
    //       alt="certificate"
    //       className="w-80 rounded-xl border border-cyan-400/20 
    //       hover:scale-105 hover:border-cyan-400 
    //       hover:shadow-[0_0_15px_#22d3ee] transition"
    //     />
    //   </div>
    //   {/* Left Arrow */}
    //   <button
    //     onClick={prev}
    //     className="absolute left-10  mt-2 flex items-center gap-2
    //        hover:bg-cyan-400/30 
    //        text-sky-400
    //        text-3xl
    //       hover:shadow-[0_0_15px_#22d3ee] transition"
    //   >
    //     <FaRegArrowAltCircleLeft />
    //     <span className="text-xl">Prev</span>
    //   </button>
    //   {/* Right Arrow */}
    //   <button
    //     onClick={next}
    //     className="absolute right-10 text-3xl mt-2 flex items-center gap-2
    //       hover:bg-cyan-400/30 
    //       text-sky-400
    //       hover:shadow-[0_0_15px_#22d3ee] transition"
    //   ><FaRegArrowAltCircleRight />
    //     <span className="text-xl"> Next</span>
    //   </button>
    // </section>


    <section
  id="certificates"
  className="py-20 text-white text-center bg-[oklch(28.2%_0.091_267.935)]/70 md:h-[720px]"
>
  <h2 className="text-4xl font-bold mb-10">
    My <span className="text-cyan-400">Certificates</span>
  </h2>

  {/* 🔥 Container */}
  <div className="relative flex items-center justify-center max-w-4xl mx-auto">

    {/* LEFT BUTTON */}
    <button
      onClick={prev}
      className="absolute left-0 flex items-center gap-2 text-sky-400 text-3xl"
    >
      <span className="hidden md:block text-xl">Prev</span>
      <FaRegArrowAltCircleLeft />
    </button>

    {/* IMAGE */}
    <img
      src={certificates[index]}
      alt="certificate"
      className="w-[90%] max-w-xl rounded-xl border border-cyan-400/20 
      hover:scale-105 hover:border-cyan-400 
      hover:shadow-[0_0_15px_#22d3ee] transition"
    />

    {/* RIGHT BUTTON */}
    <button
      onClick={next}
      className="absolute right-0 flex items-center gap-2 text-sky-400 text-3xl"
    >
      <FaRegArrowAltCircleRight />
      <span className="hidden md:block text-xl">Next</span>
    </button>

  </div>
</section>
  );
}
