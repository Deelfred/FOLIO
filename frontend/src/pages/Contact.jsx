import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

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
            Contact Me
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Have a project idea, collaboration, or freelance opportunity?
            Feel free to send me a message anytime.
          </p>
        </motion.div>

        {/* MAIN SECTION */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black">
                Contact Information
              </h2>

              <p className="mt-4 leading-7 text-zinc-600">
                I’m currently available for freelance projects,
                collaborations, and full-stack development opportunities.
              </p>

              {/* INFO CARDS */}
              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-blue-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      alfred@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-blue-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-blue-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                    <Briefcase size={24} />
                  </div>

                  <div>
                    <h3 className="font-bold">Availability</h3>
                    <p className="mt-1 text-sm text-zinc-500">
                      Open for freelance work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl"
          >
            <h2 className="text-3xl font-black">
              Send A Message
            </h2>

            <p className="mt-3 text-zinc-600">
              Fill out the form below and I’ll get back to you soon.
            </p>

            {/* INPUTS */}
            <div className="mt-10 space-y-6">
              <div>
                <label className="text-sm font-medium text-zinc-600">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-600">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-zinc-600">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="mt-2 w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-5 py-4 outline-none transition focus:border-blue-500 focus:bg-white"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;