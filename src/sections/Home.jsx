import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import myImage from "../assets/images/IMG_20251024_141215.jpg";
import "../styles/General.css";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-wrap-reverse items-center text-center justify-center gap-6 px-4 py-20 bg-[#0f172a] "
    >
      <div>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Het
          </span>
        </h1>
        <h3 className="text-3xl text-white font-bold mt-2">
          I'am{" "}
          <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Web Developer{" "}
          </span>
        </h3>
        <p className="max-w-sm mx-auto mt-3 text-gray-200 text-base leading-relaxed px-4 text-center">
          I build modern, responsive, and user-friendly web applications using React and latest web technologies.
        </p>
        <div className="flex justify-center gap-8 mt-4">
          <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 ">
            <a
              href="https://github.com/hmk2186"
              target="_blank"
              className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer "
            >
              <FaGithub />
            </a>
          </span>
          <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 ">
            <a
              href="https://www.linkedin.com/in/het-kanjariya-cte-gecbvn-ce-a48087304/"
              target="_blank"
              className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </span>
          <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 ">
            <a
              href="https://www.instagram.com/_.het._.kanjariya._/"
              target="_blank"
              className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer"
            >
              <RiInstagramFill />
            </a>
          </span>
        </div>
        <div className="flex gap-8 justify-center mt-2">
          <a href="#contact">
            <button className=" px-6 py-2 mt-4 bg-sky-400 text-black font-bold rounded-full border-2 border-sky-400 transition duration-300 hover:bg-transparent hover:text-sky-400 hover:scale-105">
              Hire Me
            </button>
          </a>
          <a href="mailto:kanjariyahet24@gmail.com">
            <button className="px-6 py-2 mt-4 border-2 border-sky-400 text-sky-400 font-bold rounded-full transition duration-300 hover:bg-sky-400 hover:text-black hover:scale-105">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          src={myImage}
          alt="profile"
          className="w-64 h-64  rounded-full object-cover mt-2 border-4 border-sky-400"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
