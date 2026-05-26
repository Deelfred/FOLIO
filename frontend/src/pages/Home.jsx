import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const stats = [
    { num: "10+", label: "Projects Built" },
    { num: "2+", label: "Years Learning" },
    { num: "Full Stack", label: "Developer" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white text-zinc-900">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-blue-200 blur-3xl md:h-[320px] md:w-[320px]" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[280px] w-[280px] rounded-full bg-cyan-200 blur-3xl md:h-[380px] md:w-[380px]" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* HERO SECTION */}
      <section className="relative z-10 flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.35rem] text-blue-600 sm:text-sm"
            >
              Frontend & Backend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Alfred Sowah
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 lg:mx-0"
            >
              Software Engineering student passionate about building
              responsive, modern, and scalable full-stack web applications
              using React, Tailwind CSS, Node.js, and MongoDB.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105 hover:bg-blue-700 sm:w-auto"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="w-full rounded-2xl border border-zinc-300 bg-white px-8 py-4 text-center font-semibold text-zinc-800 shadow-sm transition duration-300 hover:border-blue-500 hover:text-blue-600 sm:w-auto"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-blue-600 sm:text-3xl">
                    {item.num}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* GLOW */}
              <div className="absolute -inset-5 rounded-full bg-blue-200 blur-3xl" />

              {/* IMAGE */}
              <motion.img
                src="/alfred.png"
                alt="Alfred Sowah"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative h-[320px] w-[260px] rounded-[2rem] border border-zinc-200 object-cover shadow-2xl sm:h-[420px] sm:w-[340px] lg:h-[500px] lg:w-[400px]"
              />

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
                className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-center text-sm font-medium text-zinc-700 shadow-xl"
              >
                 Available for Freelance & Collaborations
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;