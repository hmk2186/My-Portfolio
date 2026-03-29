import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import myImage from "../assets/images/IMG_20251024_141215.jpg";
import "../styles/General.css";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-wrap items-center text-center justify-center gap-6 px-4 py-20"
    >
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
      <div>
        <h1 className="text-5xl font-bold text-white mt-2">
          About{" "}
          <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        
        <p className="max-w-md mx-auto mt-2 text-white text-lg leading-relaxed px-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          qui pariatur sit ipsum voluptate quae explicabo rem error
          necessitatibus assumenda possimus aspernatur optio suscipit, officiis
          accusantium nisi quos nemo exercitationem.
        </p>
        
        <div className="flex gap-8 justify-center mt-4">
          <a href="#projects">
          <button className=" px-6 py-2 mt-4 bg-sky-400 text-black font-bold rounded-full border-2 border-sky-400 transition duration-300 hover:bg-transparent hover:text-sky-400 hover:scale-105">
            Read More
          </button>
          </a>
        </div>
      </div>
      
    </section>
  );
}
