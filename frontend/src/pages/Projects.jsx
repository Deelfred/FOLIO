import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with authentication, cart system, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "/projects/ecommerce",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    link: "/projects/portfolio",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 text-zinc-900">
      {/* HEADER */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-black">
          My <span className="text-blue-600">Projects</span>
        </h1>

        <p className="mt-4 text-zinc-600">
          A collection of projects I’ve built as a full-stack developer.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>

            <p className="mt-3 text-sm text-zinc-600">
              {project.description}
            </p>

            {/* TECH */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <Link
              to={project.link}
              className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;