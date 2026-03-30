import tic_tac_toe from "../assets/images/tic-tac-toe-game.jpg";
import simon_says from "../assets/images/simon-says-game.jpg";
import todo from "../assets/images/todo.jpg";
// import { FaCode } from "react-icons/fa6";
// import { BiCodeCurly } from "react-icons/bi";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="flex flex-wrap justify-center gap-4 px-4 py-20"
//     >
//       <h3 className="text-white text-4xl font-bold text-center">Projects</h3>
//       <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
//         <div className="flex justify-center text-5xl mt-8 my-4">
//           <img src={tic_tac_toe} alt="" />
//         </div>
//         Project-1
//         <p className="text-sm mt-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
//           cumque officia quasi autem, omnis asperiores ea sint delectus facilis
//           laborum.
//         </p>
//         <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400 transition duration-300 hover:bg-transparent hover:text-sky-400  hover:scale-100">
//           Review Project
//         </button>
//       </div>
//       <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 mt-4 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
//         <div className="flex justify-center text-5xl mt-8 my-4">
//           <img src={simon_says} alt="" />
//         </div>
//         Project-2
//         <p className="text-sm mt-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
//           expedita facilis possimus consequuntur facere cum odio ipsam incidunt
//           ab exercitationem, ducimus iusto.
//         </p>
//         <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400  transition duration-300 hover:bg-transparent hover:text-sky-400 hover:scale-100">
//           Review Project
//         </button>
//       </div>
//       <div className="card-1 rounded-3xl border-2 px-4 w-70 py-2 mt-4 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
//         <div className="flex justify-center text-5xl mt-8 my-4">
//           <img src={todo} alt="" className="h-40" />
//         </div>
//         Project-3
//         <p className="text-sm mt-6">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse unde ut
//           doloremque eum eligendi, aliquam quia, perferendis optio dignissimos
//           mollitia quasi necessitatibus!
//         </p>
//         <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400  transition duration-300 hover:bg-transparent hover:text-sky-400  hover:scale-100">
//           Review Project
//         </button>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const projects = [
  {
    title: "Project-1",
    desc: "Responsive portfolio website built using React and Tailwind with smooth UI and modern design.",
    img: tic_tac_toe,
    link: "#",
  },
  {
    title: "Project-2",
    desc: "E-commerce frontend with product listing, filtering and clean UI/UX experience.",
    img: simon_says,
    link: "#",
  },
  {
    title: "Project-3",
    desc: "Task management app with features like ToDo, Notes, Calendar and smart filtering.",
    img: todo,
    link: "#",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="bg-[oklch(28.2%_0.091_267.935)]/70 text-white py-20 flex flex-col items-center h-180 md:h-[720px] w-80 mx-auto md:w-full"
    >
      <h2 className="text-4xl font-bold my-4">Projects</h2>

      {/* 🔴 MOBILE VIEW (Slider) */}
      <div className="md:hidden">
        <div className="bg-[#1e2a5a] border-2 border-cyan-400 h-110 rounded-3xl p-6 mt-4 w-auto text-center shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_#22d3ee] hover:scale-105">
          <img
            src={projects[index].img}
            alt="project"
            className="w-50 h-40 object-cover mx-auto mb-4 rounded"
          />

          <h3 className="text-2xl font-bold mb-3">{projects[index].title}</h3>

          <p className="text-gray-300 text-sm mb-5">{projects[index].desc}</p>

          <a
            href={projects[index].link}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full hover:bg-cyan-300 transition"
          >
            Review Project
          </a>

          <div className="flex justify-between mt-6">
            <button onClick={prev} className="text-4xl text-sky-400">
              <FaRegArrowAltCircleLeft />
            </button>

            <button onClick={next} className="text-4xl text-sky-400">
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>

        {/* Dots */}
        {/* <div className="flex gap-2 mt-6 justify-center">
      {projects.map((_, i) => (
        <span
          key={i}
          onClick={() => setIndex(i)}
          className={`h-2 w-2 cursor-pointer rounded-full ${
            i === index ? "bg-cyan-400" : "bg-gray-500"
          }`}
        />
      ))}
    </div> */}
      </div>

      {/* 🔵 DESKTOP VIEW (Grid) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-5xl px-6 h-300">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#1e2a5a] border-2 border-cyan-400 rounded-3xl p-4 text-center shadow-lg hover:shadow-[0_0_10px_#22d3ee] hover:scale-100 transition"
          >
            <img
              src={project.img}
              alt="project"
              className="w-50 h-40  mx-auto object-cover mb-4 rounded "
            />

            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-400 text-black px-4 py-2 rounded-full hover:bg-cyan-300 transition"
            >
              Review Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
