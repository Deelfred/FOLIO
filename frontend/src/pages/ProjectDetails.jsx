import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "Full-stack shopping platform with authentication, cart system, and admin dashboard.",
    images: [
      "/projects/ecommerce/S1.png",
      "/projects/ecommerce/S2.png",
      "/projects/ecommerce/S3.png",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React and Tailwind CSS.",
    images: [
      "/projects/portfolio/S11.png",
      "/projects/portfolio/S2.jpg",
      "/projects/portfolio/S3.jpg",
    ],
    tech: ["React", "Tailwind"],
    live: "https://alfredsowah.vercel.app/",
    github: "https://github.com/Deelfred/FOLIO.git",
  },

  
  {
    id: "church-management",
    title: "Church Management System",
    description:
      "A comprehensive system for managing church operations, events, and member information.",
    images: [
      "/projects/potfolio/church1.png",
      "/projects/potfolio/church2.png",
      "/projects/potfolio/church3.png",
      "/projects/potfolio/church4.png",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    live: "https://alfredsowah.vercel.app/",
    github: "https://github.com/Deelfred/FOLIO.git",
  },
];

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-20 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        {/* BACK */}
        <Link
          to="/projects"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-4xl font-black"
        >
          {project.title}
        </motion.h1>

        <p className="mt-4 max-w-3xl text-zinc-600">
          {project.description}
        </p>

        {/* TECH */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-8 flex gap-4">
          <a
            href={project.live}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="rounded-xl border border-zinc-300 px-6 py-3 font-semibold hover:text-blue-600"
          >
            GitHub
          </a>
        </div>

        {/* IMAGES */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="h-64 w-full rounded-2xl object-cover shadow-lg transition hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;