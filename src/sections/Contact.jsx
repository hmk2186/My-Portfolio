export default function Contact() {
  return (
    <section id="contact" className="px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mt-10 text-center">
        Contact{" "}
        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Me
        </span>
      </h1>

      {/* Form */}
      <div className="flex justify-center mt-8">
        <form className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 rounded-xl bg-transparent border-2 border-orange-400 text-white 
            focus:outline-none focus:shadow-[0_0_10px_#fb923c]"
          />

          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-xl bg-transparent border-2 border-orange-400 text-white 
            focus:outline-none focus:shadow-[0_0_10px_#fb923c]"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-xl bg-transparent border-2 border-orange-400 text-white 
            focus:outline-none focus:shadow-[0_0_10px_#fb923c]"
          />

          <input
            type="text"
            placeholder="Subject"
            className="px-4 py-3 rounded-xl bg-transparent border-2 border-orange-400 text-white 
            focus:outline-none focus:shadow-[0_0_10px_#fb923c]"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="px-4 py-3 rounded-xl bg-transparent border-2 border-orange-400 text-white 
            focus:outline-none focus:shadow-[0_0_10px_#fb923c]"
          ></textarea>

          <button
            type="submit"
            className=" px-6 py-2 mt-4 bg-orange-400 text-black font-bold rounded-full border-2 border-orange-400 shadow-[0_0_15px_#fb923c,0_0_20px_#fb923c] transition duration-300 hover:bg-transparent hover:text-orange-400 hover:shadow-none hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
