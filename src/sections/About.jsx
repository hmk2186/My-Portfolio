export default function About() {
  return (
    <section
      id="about"
      className="bg-[oklch(28.2%_0.091_267.935)]/70 text-white py-20 px-4 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="max-w-4xl text-xl md:text-2xl mt-6 md:mt-10 w-full space-y-8">

        {/* Intro */}
        <p className="text-gray-300 text-center">
          I’m Het Kanjariya, a passionate web developer focused on building
          modern, responsive and user-friendly applications.
        </p>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-8 text-lg">

          {/* Education */}
          <div className="flex-1 bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              🎓 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>3rd Year Computer Engineering Student</li>
              <li>Government Engineering College, Bhavnagar</li>
            </ul>
          </div>

          {/* Core Expertise */}
          <div className="flex-1 bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              💡 Core Expertise
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Building responsive interfaces</li>
              <li>React & Tailwind</li>
              <li>Clean code</li>
            </ul>
          </div>

        </div>

        {/* Row 2 */}
        <div className="flex flex-col text-lg md:flex-row gap-8">

          {/* Currently Exploring */}
          <div className="flex-1 bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              🚀 Currently Exploring
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Node.js & Express</li>
              <li>REST APIs</li>
              <li>Databases</li>
            </ul>
          </div>

          {/* Goal */}
          <div className="flex-1 bg-slate-900 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              🎯 Goal
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Full Stack Developer</li>
              <li>Real-world apps</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}