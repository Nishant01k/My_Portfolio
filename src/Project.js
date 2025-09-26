// src/components/Project.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

// Projects data
const projectsData = [
  {
    title: "Earnify App",
    description:
      "An Android app that allows users to earn money by watching ads. Published on Google Play Store.",
    link: "https://play.google.com/store/apps/details?id=com.viwcompany.earnify",
    type: "link",
    achievements: [
      { text: "Downloads", count: 1000, suffix: "+ Downloads" },
    ],
  },
  {
    title: "Blender Fog Material Addon",
    description:
      "A Blender addon to quickly add customizable fog materials to 3D objects with an easy-to-use sidebar panel. Ideal for creating realistic atmospheric effects.",
    link: "https://github.com/Nishant01k/Blender-Fog-Material-Addon/tags",
    type: "link",
  },
    {
    title: "Wavelet & ANN-Based Fault Detection & Protection Coordination",
    description:
      "Currently developing a system to detect, locate, and isolate faults in local distribution grids, and restore service efficiently. Combines wavelet analysis with Artificial Neural Networks (ANN) for accurate fault identification and prediction.",
    type: "status",
    text: "Ongoing Project",
  },
  {
    title: "Mero Book – Share & Study Notes",
    description:
      "Mero Book is a mobile app that allows students to share notes, study materials, and book summaries. It’s designed to make learning collaborative, easier, and accessible anytime.",
    type: "text",
  },
  {
    title: "Waste-to-Wealth – Transforming Waste into Value",
    description:
      "The Waste-to-Wealth Platform is an innovative solution that turns household and industrial waste into valuable resources. The platform connects waste generators, collectors, and recyclers, creating a sustainable ecosystem for environmental and economic benefits.",
    type: "status",
    text: "Ongoing Project",
  },
];

// Plugin card component
const PluginCard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://plugins.jetbrains.com/assets/scripts/mp-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.MarketplaceWidget) {
        window.MarketplaceWidget.setupMarketplaceWidget(
          "install",
          28580,
          "#plugin-widget"
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 flex flex-col justify-between"
    >
      <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
        Ad Integration Pro (Plugin)
      </h4>
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
        A professional Android Studio plugin that automates ad integration for
        apps, saving time and avoiding errors. Works with AdMob, Unity Ads, and
        more.
      </p>
      <div className="mt-auto flex justify-center">
        <div id="plugin-widget"></div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  // Always insert plugin as second card
  const projectsWithPlugin = [
    projectsData[0], // First project
    { type: "plugin" }, // Plugin card
    ...projectsData.slice(1), // Remaining projects
  ];

  const visibleProjects = showAll
    ? projectsWithPlugin
    : projectsWithPlugin.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Projects & Achievements</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => {
            if (project.type === "plugin") return <PluginCard key="plugin" />;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 flex flex-col justify-between"
              >
                {/* Status Badge */}
                {project.type === "status" && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {project.text}
                  </span>
                )}

                {/* Title */}
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Achievements */}
                {project.achievements && (
                  <motion.div
                    className="mb-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-xl shadow-inner"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  >
                    <h5 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                      Achievements:
                    </h5>
                    <ul className="list-none space-y-3">
                      {project.achievements.map((ach, i) => (
                        <motion.li
                          key={i}
                          initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 16,
                            delay: i * 0.15,
                          }}
                          whileHover={{
                            scale: 1.08,
                            color: "#2563eb",
                            textShadow: "0px 0px 10px rgba(37,99,235,0.8)",
                          }}
                          className="flex items-center text-gray-800 dark:text-gray-200 font-semibold"
                        >
                          <span className="mr-3 text-2xl">✨</span>
                          {ach.count ? (
                            <CountUp
                              start={0}
                              end={ach.count}
                              duration={2}
                              separator=","
                              suffix={ach.suffix || ""}
                              className="text-2xl font-bold"
                            />
                          ) : (
                            <span className="text-lg sm:text-xl">{ach.text}</span>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Action Button */}
                {project.type === "link" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-block px-4 py-2 text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition-colors duration-300 font-medium"
                  >
                    View
                  </a>
                ) : (
                  <span className="mt-auto inline-block px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-xl shadow font-medium">
                    {project.type === "status" ? project.text : "Details"}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        {projectsWithPlugin.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
