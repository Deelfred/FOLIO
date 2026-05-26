import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  const techStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "REST API",
    "Git & GitHub",
  ];

  const services = [
    {
      title: "Frontend",
      desc: "React, Tailwind CSS, JavaScript, React Router",
    },
    {
      title: "Backend",
      desc: "Node.js, Express.js, MongoDB, REST APIs",
    },
    {
      title: "Database",
      desc: "MongoDB, Mongoose",
    },
    {
      title: "Goal",
      desc: "Become a professional full-stack developer and build scalable SaaS products.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-5 py-20 text-zinc-900 sm:px-8 lg:px-16">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-blue-200 blur-3xl" />

      <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-200 blur-3xl" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3rem] text-blue-600">
            About Me
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Passionate About Building
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Modern Web Applications
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Full-stack developer passionate about creating clean,
            responsive, and scalable digital experiences from frontend
            to backend.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold">
                Who I <span className="text-blue-600">Am</span>
              </h2>

              <div className="mt-6 space-y-5 text-zinc-600">
                <p className="leading-8">
                  I’m{" "}
                  <span className="font-semibold text-blue-600">
                    Alfred Sowah
                  </span>
                  , a Software Engineering student from Ghana with a
                  strong passion for building full-stack web
                  applications.
                </p>

                <p className="leading-8">
                  I work with modern frontend technologies like React
                  and Tailwind CSS, while also building backend systems
                  using Node.js, Express, and MongoDB.
                </p>

                <p className="leading-8">
                  My goal is to create scalable and efficient
                  applications that solve real-world problems and
                  deliver amazing user experiences.
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <button className="rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105 hover:bg-blue-700">
                Download CV
              </button>

              <Link
                to="/contact"
                className="rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-center font-semibold text-zinc-800 shadow-sm transition duration-300 hover:border-blue-500 hover:text-blue-600"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >
            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-md transition duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-blue-600">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-center text-3xl font-black sm:text-4xl">
            Tech <span className="text-blue-600">Stack</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-center font-semibold shadow-sm transition duration-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;