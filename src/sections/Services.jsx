import { IoLogoFigma } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";

export default function Services() {
  return (
    <section id="services" className="flex flex-wrap justify-center gap-4 px-4 py-15 bg-[#0f172a]">
      <h3 className="text-white text-4xl font-bold text-center">
        Services
      </h3>
      <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 h-100 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <IoLogoFigma />
        </div>
        UI/UX Design
        <p className="text-sm mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          cumque officia quasi autem, omnis asperiores ea sint delectus facilis
          nesciunt, corrupti quas! Ut dolor nihil earum saepe blanditiis, quidem
          laborum.
        </p>
      </div>
      <div className="card-2 rounded-3xl border-2 px-4 py-2 w-70 mt-4 h-100 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <FaCode />
        </div>
        FrontEnd <br />
        Development
        <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima expedita facilis possimus consequuntur facere cum odio ipsam incidunt doloremque omnis eius deserunt voluptatum asperiores nesciunt repellat ab exercitationem, ducimus iusto.</p>
      </div>
      <div className="card-3 rounded-3xl border-2 px-4 w-70 py-2 mt-4 h-100 text-center border-sky-400 text-3xl text-white font-semibold hover:bg-sky-500 hover:text-black transition duration-300">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <BiCodeCurly />
        </div>
        Backend <br />
        Development
        <p className="text-sm mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse adipisci iusto nam consequuntur minima incidunt reiciendis, pariatur unde ut doloremque eum eligendi, aliquam quia, perferendis optio dignissimos mollitia quasi necessitatibus!</p>
      </div>
    </section>
  );
}
