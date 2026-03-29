import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (<>
  <div className="bottom-0 h-30 w-full bg-gray-500 ">
    <div className="flex justify-center gap-8">
              <span className="rounded-full border-orange-400 border-2 p-2 hover:scale-125 transition duration-300 hover:shadow-[0_0_12px_#fb923c,0_0_20px_#fb923c] mt-4">
                <a
                  href="https://github.com/hmk2186"
                  target="_blank"
                  className="text-2xl text-orange-400 hover:text-orange-400  transition duration-300 cursor-pointer "
                >
                  <FaGithub />
                </a>
              </span>
              <span className="rounded-full border-orange-400 border-2 p-2 hover:scale-125 transition duration-300 hover:shadow-[0_0_12px_#fb923c,0_0_20px_#fb923c] mt-4">
                <a
                  href="https://www.linkedin.com/in/het-kanjariya-cte-gecbvn-ce-a48087304/"
                  target="_blank"
                  className="text-2xl text-orange-400 hover:text-orange-400  transition duration-300 cursor-pointer"
                >
                  <FaLinkedin />
                </a>
              </span>
              <span className="rounded-full border-orange-400 border-2 p-2 hover:scale-125 transition duration-300 hover:shadow-[0_0_12px_#fb923c,0_0_20px_#fb923c] mt-4">
                <a
                  href="https://www.instagram.com/_.het._.kanjariya._/"
                  target="_blank"
                  className="text-2xl text-orange-400 hover:text-orange-400  transition duration-300 cursor-pointer"
                >
                  <RiInstagramFill />
                </a>
              </span>
            </div>
      <div className="text-center mt-4">
      @ Het Kanjariya | All Rights Reserved
      </div>
    </div>
    </>
  );
}
