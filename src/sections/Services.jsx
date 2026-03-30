import { IoLogoFigma } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[#0f172a] md:h-[720px]"
    >
      <h3 className="text-white text-4xl font-bold text-center mt-8 ">Services</h3>
      <div className="flex flex-wrap justify-center items-center mt-16 gap-8" >
      <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 h-90 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <IoLogoFigma />
        </div>
        UI/UX Design
        <p className="text-sm mt-6">
          I design clean and user-friendly interfaces with a focus on user
          experience. I ensure intuitive layouts, consistent design systems, and
          visually engaging components for better usability.
        </p>
      </div>
      <div className="card-2 rounded-3xl border-2 px-4 py-2 w-70 h-90 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <FaCode />
        </div>
        FrontEnd <br />
        Development
        <p className="text-sm mt-6">
          I build responsive and interactive user interfaces using modern
          technologies like React.js and Tailwind CSS. My focus is on creating
          fast, accessible, and visually appealing web experiences that work
          seamlessly across all devices.
        </p>
      </div>
      <div className="card-3 rounded-3xl border-2 px-4 w-70 py-2 h-90 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <BiCodeCurly />
        </div>
        Backend <br />
        Development
        <p className="text-sm mt-6">
          I develop efficient backend systems and APIs to handle data,
          authentication, and server-side logic. I focus on performance,
          scalability, and secure data handling.
        </p>
      </div>
      </div>
    </section>
  );
}
