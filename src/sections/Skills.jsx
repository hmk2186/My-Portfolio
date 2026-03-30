// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-20 px-6 text-white text-center bg-[#0f172a] h-[720px]"
//     >
//       <h2 className="text-4xl font-bold mb-10">
//         My Skills
//       </h2>

//       {/* Frontend */}
//       <h3 className="text-3xl mb-5 text-cyan-300">Frontend</h3>
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           HTML
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           CSS
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           JavaScript
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           React
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           Tailwind
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           Bootstrap
//         </span>
//       </div>

//       {/* Backend */}
//       <h3 className="text-3xl mb-5 text-cyan-300">Backend</h3>
//       <div className="flex justify-center gap-4 mb-10">
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           Node.js
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           Express.js
//         </span>
//       </div>

//       {/* Database */}
//       <h3 className="text-3xl mb-5 text-cyan-300">Database</h3>
//       <div className="flex justify-center gap-4">
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           MongoDB
//         </span>
//         <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
//           MySQL
//         </span>
//       </div>
//     </section>
//   );
// }


import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-10 lg:px-20 text-white scroll-mt-20 bg-[#0f172a] h-[720px]">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-10">
        My Skills
      </h1>

      {/* Frontend */}
      <h2 className="text-xl md:text-2xl text-cyan-400 text-center mb-6">
        Frontend
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-10">

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <FaHtml5 className="text-xl" /> HTML
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <FaCss3Alt className="text-xl" /> CSS
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <FaJs className="text-xl" /> JavaScript
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <FaReact className="text-xl" /> React
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <SiTailwindcss className="text-xl" /> Tailwind
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <SiBootstrap className="text-xl" /> Bootstrap
        </div>

      </div>

      {/* Backend */}
      <h2 className="text-xl md:text-2xl text-cyan-400 text-center mb-6">
        Backend
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-10">

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <FaNodeJs className="text-xl" /> Node.js
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <SiExpress className="text-xl" /> Express.js
        </div>

      </div>

      {/* Database */}
      <h2 className="text-xl md:text-2xl text-cyan-400 text-center mb-6">
        Database
      </h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <SiMongodb className="text-xl" /> MongoDB
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
          <SiMysql className="text-xl" /> MySQL
        </div>

      </div>

    </section>
  );
}