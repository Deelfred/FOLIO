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
    <div className="relative min-h-screen overflow-hidden bg-white px-4 sm:px-6 lg:px-16 py-16 sm:py-20 text-zinc-900">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute left-[-80px] sm:left-[-100px] top-[-80px] sm:top-[-100px] h-[180px] sm:h-[250px] w-[180px] sm:w-[250px] rounded-full bg-blue-200 blur-3xl" />

      <div className="absolute bottom-[-80px] sm:bottom-[-100px] right-[-80px] sm:right-[-100px] h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] rounded-full bg-cyan-200 blur-3xl" />

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2rem] sm:tracking-[0.3rem] text-blue-600">
            Contact Me
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-6 sm:leading-7 text-zinc-600">
            Have a project idea, collaboration, or freelance opportunity?
            Feel free to send me a message anytime.
          </p>
        </motion.div>

        {/* MAIN SECTION */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 sm:space-y-6"
          >
            <div className="rounded-3xl sm:rounded-[2rem] border border-zinc-200 bg-white p-5 sm:p-8 shadow-lg">

              <h2 className="text-2xl sm:text-3xl font-black">
                Contact Information
              </h2>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-zinc-600">
                I’m currently available for freelance projects,
                collaborations, and full-stack development opportunities.
              </p>

              {/* INFO CARDS */}
              <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">

                <div className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <Mail size={20} className="sm:size-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Email</h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                      sowahalfred26@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                    <MapPin size={20} className="sm:size-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Location</h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                      Teshie, Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                    <Briefcase size={20} className="sm:size-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base">Availability</h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                      Open for freelance work
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="rounded-3xl sm:rounded-[2rem] border border-zinc-200 bg-white p-5 sm:p-8 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-black">
              Send A Message
            </h2>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-zinc-600">
              Fill out the form below and I’ll get back to you soon.
            </p>

            <div className="mt-6 sm:mt-10 space-y-5 sm:space-y-6">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-blue-500 focus:bg-white outline-none"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-blue-500 focus:bg-white outline-none"
              />

              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full rounded-2xl border border-zinc-300 bg-zinc-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base focus:border-blue-500 focus:bg-white outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 sm:py-4 font-semibold text-white"
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