import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import myImage from "../assets/images/IMG_20251024_141215.jpg";
import "../styles/General.css";

export default function Home() {
  return (
    <section
      id="home"
      className="bg-[#0f172a] text-white py-20 md:h-[720px] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Main Layout */}
        <div className="flex flex-col md:flex-row items-center justify-evenly lg:justify-between gap-10 md:gap-16">
          {/* Image */}
          <div className="">
            <img
              src={myImage}
              alt="profile"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-sky-400"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                Het
              </span>
            </h1>

            <h3 className="text-2xl md:text-3xl font-bold mt-4">
              I'am{" "}
              <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              I build modern, responsive, and user-friendly web applications
              using React and latest web technologies.
            </p>

            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a
                href="https://github.com/hmk2186"
                target="_blank"
                className="rounded-full border-2 border-sky-400 p-3 text-xl text-sky-400 hover:scale-110 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/het-kanjariya-cte-gecbvn-ce-a48087304/"
                target="_blank"
                className="rounded-full border-2 border-sky-400 p-3 text-xl text-sky-400 hover:scale-110 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/_.het._.kanjariya._/"
                target="_blank"
                className="rounded-full border-2 border-sky-400 p-3 text-xl text-sky-400 hover:scale-110 transition duration-300"
              >
                <RiInstagramFill />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="#contact">
                <button className="px-6 py-2 bg-sky-400 text-black font-bold rounded-full border-2 border-sky-400 hover:bg-transparent hover:text-sky-400 transition duration-300">
                  Hire Me
                </button>
              </a>

              <a href="mailto:kanjariyahet24@gmail.com">
                <button className="px-6 py-2 border-2 border-sky-400 text-sky-400 font-bold rounded-full hover:bg-sky-400 hover:text-black transition duration-300">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
