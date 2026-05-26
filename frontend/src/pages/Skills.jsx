import { motion } from "framer-motion";

const skills = [
  { name: "React/React Native", level: "Frontend" },
  { name: "Tailwind CSS", level: "Styling" },
  { name: "JavaScript", level: "Language" },
  { name: "Node.js", level: "Backend" },
  { name: "Express.js", level: "Backend" },
  { name: "MongoDB", level: "Database" },
  { name: "Git & GitHub", level: "Version Control" },
  { name: "REST APIs", level: "Backend" },
];

function Skills() {
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
            My Skills
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Technologies I Use To Build
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Modern Applications
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            A collection of technologies and tools I use to create
            responsive, scalable, and modern full-stack web applications.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="mx-auto mt-20 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-md transition duration-300 hover:border-blue-500 hover:shadow-2xl"
            >
              {/* ICON CIRCLE */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                {skill.name.charAt(0)}
              </div>

              {/* SKILL NAME */}
              <h2 className="mt-6 text-xl font-bold transition duration-300 group-hover:text-blue-600">
                {skill.name}
              </h2>

              {/* SKILL LEVEL */}
              <p className="mt-2 text-sm font-medium text-zinc-500">
                {skill.level}
              </p>

              {/* LINE */}
              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-zinc-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXTRA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-24 max-w-4xl rounded-[2rem] border border-zinc-200 bg-white p-10 text-center shadow-xl"
        >
          <h2 className="text-3xl font-black">
            Always Learning & Improving 
          </h2>

          <p className="mt-5 leading-8 text-zinc-600">
            I continuously improve my skills by building projects,
            learning modern technologies, and exploring better ways to
            create efficient and scalable applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;