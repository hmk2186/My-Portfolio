import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <>
    {/* <div className="bottom-0 h-30 w-full bg-gray-700 flex justify-center items-center"> */}
    {/* <div className="flex justify-center gap-8">
              <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 mt-4">
                <a
                  href="https://github.com/hmk2186"
                  target="_blank"
                  className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer "
                >
                  <FaGithub />
                </a>
              </span>
              <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 mt-4">
                <a
                  href="https://www.linkedin.com/in/het-kanjariya-cte-gecbvn-ce-a48087304/"
                  target="_blank"
                  className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="rounded-full border-sky-400 border-2 p-2 hover:scale-125 transition duration-300 mt-4">
                <a
                  href="https://www.instagram.com/_.het._.kanjariya._/"
                  target="_blank"
                  className="text-2xl text-sky-400 hover:text-sky-400  transition duration-300 cursor-pointer"
                >
                  <RiInstagramFill />
                </a>
              </span>
            </div> */}
      {/* <div >
      @ Het Kanjariya | All Rights Reserved
      </div>
    </div> */}
    
    <footer className="w-full bg-gray-800 text-white py-8 px-4">
      
      {/* Main Footer Content */}
      <div className="max-w-xl mx-auto flex flex-col justify-between items-center gap-6">

        {/* Middle - Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-sky-400 transition ">Home</a>
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#services" className="hover:text-sky-400 transition">Services</a>
          <a href="#certificates" className="hover:text-sky-400 transition">Certificates</a>
          <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/hmk2186" target="_blank" rel="noreferrer"
            className="text-xl hover:text-sky-400 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/het-kanjariya-cte-gecbvn-ce-a48087304/"
            target="_blank" rel="noreferrer"
            className="text-xl hover:text-sky-400 transition">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/_.het._.kanjariya._/"
            target="_blank" rel="noreferrer"
            className="text-xl hover:text-sky-400 transition">
            <RiInstagramFill />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Het Kanjariya | All Rights Reserved
      </div>

    </footer>
    </>
  );
}
