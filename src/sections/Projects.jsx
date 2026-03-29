import tic_tac_toe from "../assets/images/tic-tac-toe-game.jpg";
import simon_says from "../assets/images/simon-says-game.jpg";
import todo from "../assets/images/todo.jpg";
import { FaCode } from "react-icons/fa6";
import { BiCodeCurly } from "react-icons/bi";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-wrap justify-center gap-4 px-4 py-20"
    >
      <h3 className="text-white text-4xl font-bold text-center">Projects</h3>
      <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <img src={tic_tac_toe} alt="" />
        </div>
        Project-1
        <p className="text-sm mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          cumque officia quasi autem, omnis asperiores ea sint delectus facilis
          laborum.
        </p>
        <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400 transition duration-300 hover:bg-transparent hover:text-sky-400  hover:scale-100">
          Review Project
        </button>
      </div>
      <div className="card-1 rounded-3xl border-2 px-4 py-2 w-70 mt-4 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <img src={simon_says} alt="" />
        </div>
        FrontEnd <br />
        Development
        <p className="text-sm mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          expedita facilis possimus consequuntur facere cum odio ipsam incidunt
          ab exercitationem, ducimus iusto.
        </p>
        <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400  transition duration-300 hover:bg-transparent hover:text-sky-400 hover:scale-100">
          Review Project
        </button>
      </div>
      <div className="card-1 rounded-3xl border-2 px-4 w-70 py-2 mt-4 h-130 text-center border-sky-400 text-3xl text-white font-semibold ">
        <div className="flex justify-center text-5xl mt-8 my-4">
          <img src={todo} alt="" className="h-40" />
        </div>
        Backend <br />
        Development
        <p className="text-sm mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse unde ut
          doloremque eum eligendi, aliquam quia, perferendis optio dignissimos
          mollitia quasi necessitatibus!
        </p>
        <button className="px-4 py-1 mt-6 bg-sky-400 text-black text-lg font-semibold rounded-full border-2 border-sky-400  transition duration-300 hover:bg-transparent hover:text-sky-400  hover:scale-100">
          Review Project
        </button>
      </div>
    </section>
  );
}
