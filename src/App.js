import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Mail, Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Header from "./Header";
import Certifications from "./Certifications";
import Project from "./Project";
import Research from "./Research";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Helmet>
        <title>Santosh Kumar Chaudhary | Portfolio</title>
        <meta
          name="description"
          content="Electrical and Electronics Engineering portfolio of Santosh Kumar Chaudhary, featuring power systems, automation, research papers, projects, and certifications."
        />
      </Helmet>

      {/* Header with dark mode toggle */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen pt-24 px-4 flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-gray-800 text-black dark:text-white">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-extrabold tracking-tight uppercase select-none relative text-black dark:text-white leading-none"
          style={{
            textShadow: `
              1px 1px 0 #444,
              2px 2px 0 #333,
              3px 3px 0 #222,
              4px 4px 0 #111,
              5px 5px 8px rgba(0,0,0,0.5)
            `
          }}
        >
          SANTOSH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-2xl mt-6 font-medium text-gray-700 dark:text-gray-300 text-center max-w-3xl"
        >
          Electrical and Electronics Engineering | Power Systems | Automation | Research
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex gap-4 sm:gap-6 flex-wrap justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-white shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black dark:border-white hover:bg-black hover:text-white rounded-xl font-semibold shadow-md"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            <div className="absolute w-72 h-72 bg-blue-500/20 dark:bg-blue-400/10 blur-3xl rounded-full -z-10"></div>
            <img
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              alt="Santosh Kumar Chaudhary"
              className="w-72 h-72 object-cover rounded-3xl shadow-lg border-4 border-black dark:border-white"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 text-center">About Me</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm <span className="font-semibold">Santosh Kumar Chaudhary</span>, an Electrical and Electronics Engineering focused on power systems, automation, research, and AI-driven engineering solutions. I enjoy combining technology, creativity, and engineering knowledge to solve real-world problems. From developing practical engineering tools to exploring research in electrical and electronic engineering, I thrive on turning ideas into meaningful outcomes.
            </p>

            <div className="mt-8 text-center">
              <a
                href={process.env.PUBLIC_URL + "/CV.pdf"}
                download
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-white shadow-lg"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Research Papers Section */}
      <Research />

      {/* Projects Section */}
      <Project />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-10 text-lg">
            I'm always open to collaboration or just a friendly hello. Feel free to reach out via email or connect on GitHub, LinkedIn, Facebook, or Instagram!
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8">
            {[
              { href: "mailto:chaudharysantosh03k@gmail.com", icon: <Mail size={24} />, label: "Email", bgHover: "hover:bg-blue-600 hover:text-white" },
              { href: "https://github.com/nishant01k", icon: <Github size={24} />, label: "GitHub", bgHover: "hover:bg-gray-900 hover:text-white" },
              { href: "https://linkedin.com/in/santosh-kumar-chaudhary-06baa9350", icon: <Linkedin size={24} />, label: "LinkedIn", bgHover: "hover:bg-blue-700 hover:text-white" },
              { href: "https://facebook.com/santosh01k", icon: <Facebook size={24} />, label: "Facebook", bgHover: "hover:bg-blue-600 hover:text-white" },
              { href: "https://instagram.com/nishant_01k?igsh=ZGprempmcnZ1aTdy", icon: <Instagram size={24} />, label: "Instagram", bgHover: "hover:bg-pink-500 hover:text-white" },
              { href: "https://orcid.org/0009-0000-1475-5445", icon: <span className='font-bold'>ORCID</span>, label: "ORCID", bgHover: "hover:bg-green-600 hover:text-white" }
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow transition-all duration-300 ${item.bgHover}`}
              >
                {item.icon} {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        Copyright {new Date().getFullYear()} Santosh Kumar Chaudhary. All rights reserved.
      </footer>
    </div>
  );

  
}
