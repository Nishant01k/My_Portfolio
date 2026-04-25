const researchPapers = [
  {
    title:
      "Multi-Class Fault Type Classification Using Sequence Components and Wavelet Features with Comparative Study of Machine Learning Models and Neural Networks",
    description:
      "The growing complexity of modern power networks requires intelligent fault classification techniques capable of handling multiple fault conditions with high accuracy. Classifying faults in transmission lines with higher accuracy is very important to provide reliability to the power system along with a shorter fault clearance time. The presented work provides a reliable fault classification system in transmission lines using a hybrid approach in feature extraction, taking into consideration both the symmetrical components and time-frequency analysis using wavelet transform. The hybrid technique will be able to analyze imbalance in both transients. Some machine learning algorithms along with an artificial neural network are presented for their implementation in a unified platform. A comparative study will be performed based on standard parameters for fault classification accuracy. The simulation results show improved accuracy with lower misclassifications among related faults using ensemble machine learning algorithms.",
    link: "https://doi.org/10.1109/ictp67998.2026.11485076",
  },
  {
    title:
      "An Efficient Deep Learning Based Mobile Application for Pigeon Pea Disease Classification",
    description:
      "About 65 percent of Nepal's population depends on agriculture, with pigeon pea ('Rahar') being a key legume crop for traditional food products. Frequent disease outbreaks, coupled with limited access to agronomists and challenging terrain, force small-scale farmers to rely on manual visual inspection, often resulting in delayed or inaccurate disease identification and excessive pesticide use. This study presents an end-to-end mobile application for real-time pigeon pea disease classification. A self-collected dataset of 7,930 leaf images from multiple farms was used to train a VGG16-based deep learning model, achieving 98 percent accuracy and an F1-score of 94 percent. For deployment on resource-constrained devices, the model was optimized using TensorFlow Lite, with an average inference time of 18 ms per image. The results demonstrate the system's feasibility and effectiveness for early field-level disease detection. Future work will expand the dataset, improve the interpretability of the model, and integrate additional features such as video-based diagnosis, agronomist guidance, and market insight.",
    link: "https://doi.org/10.1109/ictp67998.2026.11485179",
    tag: "Best Paper Award",
  },
];

const Research = () => {
  return (
    <section id="research-papers" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-12">Published Research Papers</h3>
        <div className="space-y-6">
          {researchPapers.map((paper) => (
            <div
              key={paper.link}
              className="relative p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600"
            >
              {paper.tag && (
                <span className="absolute top-4 right-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {paper.tag}
                </span>
              )}
              <h4 className="text-xl font-bold">{paper.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {paper.description}
              </p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-5 py-2 text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
