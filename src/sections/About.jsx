// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { RiInstagramFill } from "react-icons/ri";
// import myImage from "../assets/images/IMG_20251024_141215.jpg";
// import "../styles/General.css";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="flex flex-wrap items-center text-center justify-center gap-6 px-4 py-20 bg-[oklch(28.2%_0.091_267.935)]/70 "
//     >
//       {/* <div>
//         <img
//           src={myImage}
//           alt="profile"
//           className="w-64 h-64  rounded-full object-cover mt-2 border-4 border-sky-400"
//           style={{
//             animation: "float 3s ease-in-out infinite",
//           }}
//         />
//       </div> */}
//       <div>
//         <h1 className="text-5xl font-bold text-white mt-2">
//           About{" "}
//           <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
//             Me
//           </span>
//         </h1>

//         <p className="max-w-md mx-auto mt-8 text-gray-200 text-base leading-8 px-4 text-lg">
//           I’m Het Kanjariya, a 3rd year Computer Engineering student at GEC
//           Bhavnagar with a passion for web development. I build responsive and
//           user-friendly web applications using React, JavaScript, and modern CSS
//           frameworks like Tailwind and Bootstrap. I’m also exploring backend
//           technologies like Node.js, Express, and databases to grow as a full
//           stack developer.
//         </p>

//         {/* <div className="flex gap-8 justify-center mt-4">
//           <a href="#projects">
//             <button className=" px-6 py-2 mt-4 bg-sky-400 text-black font-bold rounded-full border-2 border-sky-400 transition duration-300 hover:bg-transparent hover:text-sky-400 hover:scale-105">
//               Read More
//             </button>
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// }

export default function About() {
  return (
    <section
      id="about"
      className="bg-[oklch(28.2%_0.091_267.935)]/70 text-white py-20 px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="max-w-2xl space-y-6 text-lg">
        {/* Intro */}
        <p className="text-gray-300 text-center">
          I’m Het Kanjariya, a passionate web developer focused on building
          modern, responsive and user-friendly applications.
        </p>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            🎓 Education
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>3rd Year Computer Engineering Student</li>
            <li>Government Engineering College, Bhavnagar</li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            💡 Core Expertise
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Building responsive and interactive web interfaces</li>
            <li>Creating modern UI using React and Tailwind CSS</li>
            <li>Writing clean, reusable and maintainable code</li>
          </ul>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            🚀 Currently Exploring
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Backend development with Node.js and Express</li>
            <li>REST API design and integration</li>
            <li>Database concepts and real-world applications</li>
          </ul>
        </div>

        {/* Goal */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">🚀 Goal</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Become a Full Stack Developer</li>
            <li>Build scalable and real-world applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
