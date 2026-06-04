import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import CV from "./pages/CV";
import Resume from "./pages/Resume";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/skills", label: "SKILLS" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/contact", label: "CONTACT" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-[4px] text-blue-400"
          >
            PORTFOLIO
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition duration-300 hover:text-blue-400 ${
                    isActive ? "text-blue-400" : "text-zinc-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-2 transition hover:border-blue-500 md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="border-t border-zinc-800 bg-zinc-950/95 px-5 py-5 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-blue-500 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ROUTES */}
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />

          {/* PROJECT DETAILS PAGE */}
          <Route path="/projects/:id" element={<ProjectDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
        <p>© 2026 Alfred Sowah. All rights reserved.</p>
      </footer>

      <Analytics />
    </div>
  );
}

export default App;
