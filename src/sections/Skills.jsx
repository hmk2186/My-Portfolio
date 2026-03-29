import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 text-white text-center bg-[#0f172a]"
    >
      <h2 className="text-4xl font-bold mb-10">
        My <span className="text-cyan-400">Skills</span>
      </h2>

      {/* Frontend */}
      <h3 className="text-3xl mb-5 text-cyan-300">Frontend</h3>
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          HTML
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          CSS
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          JavaScript
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          React
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          Tailwind
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          Bootstrap
        </span>
      </div>

      {/* Backend */}
      <h3 className="text-3xl mb-5 text-cyan-300">Backend</h3>
      <div className="flex justify-center gap-4 mb-10">
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          Node.js
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          Express.js
        </span>
      </div>

      {/* Database */}
      <h3 className="text-3xl mb-5 text-cyan-300">Database</h3>
      <div className="flex justify-center gap-4">
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          MongoDB
        </span>
        <span className="border border-cyan-400/20 px-4 py-2 rounded-lg hover:border-cyan-400 hover:scale-105 hover:bg-sky-400 hover:text-black transition">
          MySQL
        </span>
      </div>
    </section>
  );
}
