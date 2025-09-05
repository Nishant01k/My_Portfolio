import { motion } from "framer-motion";
import { useState } from "react";

export default function Certificates() {
  const certificates = [
    { title: "Ministry of Education, Science and Technology (MOEST)\n- कदर पत्र", image: "/certficate/1.jpg" },
    { title: "UI/UX Design Winner", image: "/certficate/2.jpg" },
    { title: "Certificate of Completion", image: "/certficate/13.jpg" },
    { title: "Open Project Competition", image: "/certficate/3.jpg" },
    { title: "Hult Prize", image: "/certficate/4.jpg" },
    { title: "UI/UX Competition", image: "/certficate/5.jpg" },
    { title: "Certificate of Appreciation", image: "/certficate/6.jpg" },
    { title: "Certificate of Appreciation", image: "/certficate/7.jpg" },
    { title: "Certificate of Honor", image: "/certficate/8.jpg" },
    { title: "Certificate of Appreciation", image: "/certficate/9.jpg" },
     { title: "Certificate of Participation", image: "/certficate/10.jpg" },
      { title: "Certificate of Achievement", image: "/certficate/11.jpg" },
       { title: "Hult Prize - Organizing Committee", image: "/certficate/12.jpg" },
          { title: "Certificate of Appreciation", image: "/certficate/15.jpg" },
          { title: "Certificate of Achievement", image: "/certficate/16.jpg" },
  ];

  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="certificates">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12">Certifications</h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(showAll ? certificates : certificates.slice(0, 3)).map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="shadow-lg rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Certificate"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
