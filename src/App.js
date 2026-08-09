import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ArrowUpRight, Menu, X } from "lucide-react";
import CountUp from "react-countup";
import earnifyLogo from "./assets/earnify-logo.png";
import gridIntelligenceImage from "./assets/grid-intelligence-v2.png";
import "./index.css";

const profileLinks = {
  email: "mailto:santoshkchaudhary@ieee.org",
  scholar: "https://scholar.google.com/citations?user=4NS6NSgAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0000-1475-5445",
  linkedin: "https://www.linkedin.com/in/santosh-kumar-chaudhary-06baa9350",
  github: "https://github.com/nishant01k",
};

const projects = [
  {
    no: "01",
    title: "Earnify",
    tag: "Android Product / Rewards Platform",
    scope: "Product Direction / Android Engineering / Release",
    text: "A live Android rewards product developed from concept through release, with a focused user experience, Firebase-backed data flow and an actively maintained delivery pipeline.",
    facts: [
      "Live Android release on Google Play",
      "Approximately 1,900 registered users (internal analytics)",
      "1K+ public downloads",
    ],
    href: "https://play.google.com/store/apps/details?id=com.viwcompany.earnify",
    cta: "EXPLORE ON GOOGLE PLAY",
    visual: "earnify",
  },
  {
    no: "02",
    title: "Ad Integration Pro",
    tag: "Android Studio Plugin / Developer Tool",
    scope: "Plugin UX / Code Generation / Distribution",
    text: "A developer tool that turns fragmented ad-network setup into one guided Android Studio workflow and generates reusable Java or Kotlin integration code.",
    facts: [
      "Guided integrations for AdMob, Unity Ads, Meta and ironSource",
      "Automated Gradle and Android manifest configuration",
      "Distributed through JetBrains Marketplace",
    ],
    href: "https://plugins.jetbrains.com/plugin/28580-ad-integration-pro",
    cta: "VIEW PLUGIN",
    visual: "adpro",
  },
  {
    no: "03",
    title: "Grid Intelligence",
    tag: "Power-System Protection / Applied AI",
    scope: "System Modelling / Fault Intelligence / Remote Control",
    text: "A protection and monitoring system that connects simulated grid faults to intelligent classification, real-time Android visibility and controlled breaker actions.",
    facts: [
      "Simulation-validated MATLAB/Simulink fault pipeline",
      "Sequence components, DWT and ANN/ML model comparison",
      "Firebase-connected monitoring and simulated breaker control",
    ],
    href: "/grid-intelligence-report.pdf#page=1",
    cta: "READ PROJECT REPORT",
    visual: "grid",
  },
  {
    no: "04",
    title: "Fog Material Add‑on",
    tag: "Blender Add-on / 3D Workflow",
    scope: "Add-on UX / Material Automation / Open-source Release",
    text: "An open-source Blender tool that reduces atmospheric material setup to a focused, adjustable in-editor workflow for faster visual iteration.",
    facts: [
      "Adjustable material-based atmosphere controls",
      "Focused workflow inside Blender's sidebar",
      "Open-source v1.0 release",
    ],
    href: "https://github.com/Nishant01k/Blender-Fog-Material-Addon/tags",
    cta: "VIEW GITHUB RELEASE",
    visual: "fog",
  },
];

const visualBrandMarks = {
  androidStudio: {
    label: "Android Studio",
    path: "M19.2693 10.3368c-.3321 0-.6026.2705-.6026.6031v9.8324h-1.7379l-3.3355-6.9396c.476-.5387.6797-1.286.5243-2.0009a2.2862 2.2862 0 0 0-1.2893-1.6248v-.8124c.0121-.2871-.1426-.5787-.4043-.7407-.1391-.0825-.2884-.1234-.4402-.1234a.8478.8478 0 0 0-.4318.1182c-.2701.1671-.4248.4587-.4123.7662l-.0003.721c-1.0149.3668-1.6619 1.4153-1.4867 2.5197a2.282 2.282 0 0 0 .5916 1.2103l-3.2096 6.9064H4.0928c-1.0949-.007-1.9797-.8948-1.9832-1.9896V5.016c-.0055 1.1024.8836 2.0006 1.9859 2.0062a2.024 2.024 0 0 0 .1326-.0037h14.7453s2.5343-.2189 2.8619 1.5392c-.2491.0287-.4449.2321-.4449.4889 0 .7115-.5791 1.2901-1.3028 1.2901h-.8183zM17.222 22.5366c.2347.4837.0329 1.066-.4507 1.3007-.1296.0629-.2666.0895-.4018.0927a.9738.9738 0 0 1-.3194-.0455c-.024-.0078-.046-.0209-.0694-.0305a.9701.9701 0 0 1-.2277-.1321c-.0247-.0192-.0495-.038-.0724-.0598-.0825-.0783-.1574-.1672-.21-.2757l-1.2554-2.6143-1.5585-3.2452a.7725.7725 0 0 0-.6995-.4443h-.0024a.792.792 0 0 0-.7083.4443l-1.5109 3.2452-1.2321 2.6464a.9722.9722 0 0 1-.7985.5795c-.0626.0053-.1238-.0024-.185-.0087-.0344-.0036-.069-.0053-.1025-.0124-.0489-.0103-.0954-.0278-.142-.0452-.0301-.0113-.0613-.0197-.0901-.0339-.0496-.0244-.0948-.0565-.1397-.0889-.0217-.0156-.0457-.0275-.0662-.045a.9862.9862 0 0 1-.1695-.1844.9788.9788 0 0 1-.0708-.9852l.8469-1.8223 3.2676-7.0314a1.7964 1.7964 0 0 1-.7072-1.1637c-.1555-.9799.5129-1.9003 1.4928-2.0559V9.3946a.3542.3542 0 0 1 .1674-.3155.3468.3468 0 0 1 .3541 0 .354.354 0 0 1 .1674.3155v1.159l.0129.0064a1.8028 1.8028 0 0 1 1.2878 1.378 1.7835 1.7835 0 0 1-.6439 1.7836l3.3889 7.0507.8481 1.7643zM12.9841 12.306c.0042-.6081-.4854-1.1044-1.0935-1.1085a1.1204 1.1204 0 0 0-.7856.3219 1.101 1.101 0 0 0-.323.7716c-.0042.6081.4854 1.1044 1.0935 1.1085h.0077c.6046 0 1.0967-.488 1.1009-1.0935zm-1.027 5.2768c-.1119.0005-.2121.0632-.2571.1553l-1.4127 3.0342h3.3733l-1.4564-3.0328a.274.274 0 0 0-.2471-.1567zm8.1432-6.7459l-.0129-.0001h-.8177a.103.103 0 0 0-.103.103v12.9103a.103.103 0 0 0 .0966.103h.8435c.9861-.0035 1.7836-.804 1.7836-1.79V9.0468c0 .9887-.8014 1.7901-1.7901 1.7901zM2.6098 5.0161v.019c.0039.816.6719 1.483 1.4874 1.4869a12.061 12.061 0 0 1 .1309-.0034h1.1286c.1972-1.315.7607-2.525 1.638-3.4859H4.0993c-.9266.0031-1.6971.6401-1.9191 1.4975.2417.0355.4296.235.4296.4859zm6.3381-2.8977L7.9112.3284a.219.219 0 0 1 0-.2189A.2384.2384 0 0 1 8.098 0a.219.219 0 0 1 .1867.1094l1.0496 1.8158a6.4907 6.4907 0 0 1 5.3186 0L15.696.1094a.2189.2189 0 0 1 .3734.2189l-1.0302 1.79c1.6671.9125 2.7974 2.5439 3.0975 4.4018l-12.286-.0014c.3004-1.8572 1.4305-3.488 3.0972-4.4003zm5.3774 2.6202a.515.515 0 0 0 .5271.5028.515.515 0 0 0 .5151-.5151.5213.5213 0 0 0-.8885-.367.5151.5151 0 0 0-.1537.3793zm-5.7178-.0067a.5151.5151 0 0 0 .5207.5095.5086.5086 0 0 0 .367-.1481.5215.5215 0 1 0-.734-.7341.515.515 0 0 0-.1537.3727z",
  },
  blender: {
    label: "Blender",
    path: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
  },
};

function VisualBrandMark({ brand }) {
  const mark = visualBrandMarks[brand];

  return (
    <span className={`visual-brand-mark ${brand}`} title={mark.label}>
      <svg viewBox="0 0 24 24" role="img" aria-label={mark.label}>
        <path d={mark.path} />
      </svg>
    </span>
  );
}

const papers = [
  {
    no: "01",
    domain: "Power-system protection / Applied machine learning",
    title:
      "Multi-Class Fault Type Classification Using Sequence Components and Wavelet Features with Comparative Study of Machine Learning Models and Neural Networks",
    metrics: [
      { value: "36K", label: "SIMULATED SAMPLES" },
      { value: "97.58%", label: "BEST ACCURACY" },
    ],
    abstract:
      "The growing complexity of modern power networks requires intelligent fault classification techniques capable of handling multiple fault conditions with high accuracy. Classifying faults in transmission lines with higher accuracy is very important to provide reliability to the power system along with a shorter fault clearance time. The presented work provides a reliable fault classification system in transmission lines using a hybrid approach in feature extraction, taking into consideration both the symmetrical components and time-frequency analysis using wavelet transform. The hybrid technique will be able to analyze imbalance in both transients. Some machine learning algorithms along with an artificial neural network are presented for their implementation in a unified platform. A comparative study will be performed based on standard parameters for fault classification accuracy. The simulation results show improved accuracy with lower misclassifications among related faults using ensemble machine learning algorithms.",
    href: "https://doi.org/10.1109/ICTP67998.2026.11485076",
    publication: "2026 International Conference on ICT and Photonics",
    role: "FIRST AUTHOR / ORAL PRESENTER",
    cta: "VIEW ON IEEE XPLORE",
  },
  {
    no: "02",
    domain: "Mobile AI / Agricultural diagnostics",
    title:
      "An Efficient Deep Learning Based Mobile Application for Pigeon Pea Disease Classification",
    metrics: [
      { value: "98%", label: "MODEL ACCURACY" },
      { value: "18 ms", label: "AVG. INFERENCE" },
    ],
    abstract:
      "About 65 percent of Nepal's population depends on agriculture, with pigeon pea ('Rahar') being a key legume crop for traditional food products. Frequent disease outbreaks, coupled with limited access to agronomists and challenging terrain, force small-scale farmers to rely on manual visual inspection, often resulting in delayed or inaccurate disease identification and excessive pesticide use. This study presents an end-to-end mobile application for real-time pigeon pea disease classification. A self-collected dataset of 7,930 leaf images from multiple farms was used to train a VGG16-based deep learning model, achieving 98 percent accuracy and an F1-score of 94 percent. For deployment on resource-constrained devices, the model was optimized using TensorFlow Lite, with an average inference time of 18 ms per image. The results demonstrate the system's feasibility and effectiveness for early field-level disease detection. Future work will expand the dataset, improve the interpretability of the model, and integrate additional features such as video-based diagnosis, agronomist guidance, and market insight.",
    href: "https://doi.org/10.1109/ICTP67998.2026.11485179",
    publication: "2026 International Conference on ICT and Photonics",
    role: "SECOND AUTHOR / ANDROID & TFLITE CONTRIBUTOR",
    award: {
      title: "BEST PAPER AWARD",
      detail: "TRACK 5 / RECENT TRENDS IN COMPUTING",
    },
    cta: "VIEW ON IEEE XPLORE",
  },
];

const experiencePath = [
  { no: "01", environment: "DATA CENTRE", focus: "DESIGN + IMPLEMENTATION" },
  { no: "02", environment: "CONTROL LAB", focus: "PLC + HMI" },
  { no: "03", environment: "132 kV GRID", focus: "PROTECTION + OPERATIONS" },
];

const experienceStations = [
  {
    no: "01",
    type: "PROFESSIONAL PRACTICE",
    period: "Mar - Jul 2026",
    role: "Electrical & Electronics Engineer",
    company: "M And MB Soft Tech Pvt. Ltd.",
    place: "In-house Data Centre / Nepal",
    text: "Contributed to the electrical design and implementation of an in-house data centre, covering load planning, single-line diagrams, UPS and inverter integration, earthing, rack power, ATS testing and commissioning checks.",
    skills: ["AutoCAD", "Single-line diagrams", "Power distribution", "ATS testing"],
  },
  {
    no: "02",
    type: "FIELD EXPOSURE",
    period: "Sep - Oct 2025",
    role: "Industrial Trainee / Substation Operations",
    company: "Nepal Electricity Authority (NEA)",
    place: "Lahan 132 kV Substation / Nepal",
    text: "Studied how protection panels, switchyard equipment, control-room monitoring, maintenance and permit-to-work safety work together in a live 132 kV substation.",
    skills: ["Switchyard equipment", "Protection panels", "Control-room operations"],
  },
];

const controlTraining = {
  period: "Dec 2025 - Feb 2026",
  title: "PLC & HMI Control Systems",
  organisation: "Nepal Engineering College",
  detail: "21 Credit Hours / Nepal",
  text: "Built and tested PLC/HMI control sequences in Siemens TIA Portal, including ladder logic, live monitoring, motor-control and traffic-light systems.",
  skills: ["Siemens TIA Portal", "Ladder logic", "HMI monitoring", "Motor control"],
};

const capabilities = [
  {
    label: "ELECTRICAL ENGINEERING",
    title: "Power Systems",
    text: "I model faults, protection behaviour and electrical infrastructure to turn system studies into practical design and operating decisions.",
    tools: ["MATLAB", "Simulink", "ETAP", "AutoCAD", "Relay coordination"],
  },
  {
    label: "INTELLIGENT SYSTEMS",
    title: "Applied AI",
    text: "I build validated learning pipelines that move from signals and images to compact models and real-time mobile inference.",
    tools: ["Python", "TensorFlow", "Keras", "TensorFlow Lite", "DWT"],
  },
  {
    label: "DIGITAL PRODUCTS",
    title: "Product Development",
    text: "I turn engineering ideas into useful Android products, cloud-connected workflows and developer tools built for real users.",
    tools: ["Java", "Android Studio", "Firebase", "C / C++", "Git"],
  },
  {
    label: "CONTROL + RESEARCH",
    title: "Automation & Research",
    text: "I connect PLC/HMI control logic with reproducible experiments, clear technical writing and evidence-led engineering decisions.",
    tools: ["Siemens TIA Portal", "Ladder logic", "HMI", "LaTeX", "Advanced Excel"],
  },
];

const leadership = [
  {
    period: "2024 - 2025",
    title: "Chairperson",
    organisation: "IEEE Nepal Engineering College Student Branch",
    text: "Directed student engagement and technical programming for IEEE ICTP Conference 2025, shaping the event launch and branch activation.",
  },
  {
    period: "2024 - 2025",
    title: "Secretary",
    organisation: "Center for Research in Applied Science and Technology",
    text: "Designed research-focused events, streamlined documentation workflows, and kept interdisciplinary teams aligned on delivery.",
  },
  {
    period: "2024 - 2025",
    title: "IEEE ACEI Ambassador",
    organisation: "Nepal Engineering College",
    text: "Built campus AI awareness through hands-on workshops, student campaigns, and collaborative faculty outreach.",
  },
  {
    period: "2023 - 2024",
    title: "Organising Committee Member",
    organisation: "Hult Prize OnCampus / Nepal Engineering College",
    text: "Supported challenge logistics, team coordination, and event communication for a student-driven social innovation program.",
  },
];

const recognition = [
  {
    no: "01",
    title: "Best Paper Award",
    text: "IEEE ICTP 2026 / Track 5: Recent Trends in Computing",
  },
  {
    no: "02",
    title: "Oral Conference Presenter",
    text: "Presented first-author power-system research at IEEE ICTP 2026",
  },
  {
    no: "03",
    title: "Consolation Prize",
    text: "GCP-Powered AI Solutions for Building on Aelf Challenge / 2024",
  },
  {
    no: "04",
    title: "STEAM Competition Participant",
    text: "University Students' STEAM Material Design Competition / MOEST Nepal",
  },
];

const profileHighlights = [
  {
    no: "01",
    value: 2,
    suffix: "",
    label: "IEEE PAPERS",
    detail: "PUBLISHED RESEARCH",
  },
  {
    no: "02",
    value: 1,
    suffix: "",
    label: "BEST PAPER",
    detail: "IEEE ICTP 2026",
  },
  {
    no: "03",
    value: 132,
    suffix: " kV",
    label: "GRID SYSTEMS",
    detail: "SUBSTATION TRAINING",
  },
  {
    no: "04",
    value: 1000,
    suffix: "+",
    label: "PUBLIC DOWNLOADS",
    detail: "EARNIFY ON GOOGLE PLAY",
  },
];

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Research", "#research"],
    ["Work", "#work"],
    ["Experience", "#experience"],
    ["Capabilities", "#capabilities"],
    ["Leadership & Recognition", "#leadership"],
    ["Contact", "#contact"],
  ];

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Home">
        SANTOSH
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([name, href]) => (
          <a key={name} href={href} onClick={handleNavClick}>
            {name}
          </a>
        ))}
      </nav>
      <div className="header-meta">
        <a href={profileLinks.email}>MAIL <ArrowUpRight size={12} /></a>
      </div>
      <button
        type="button"
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map(([name, href]) => (
              <a key={name} href={href} onClick={handleNavClick}>
                {name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NepalFlag() {
  return (
    <svg
      className="nepal-flag"
      viewBox="0 0 30 36"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 1.5v33h25L8.2 19h14.6L2.5 1.5Z"
        fill="#dc143c"
        stroke="#003893"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.1 9.2a3.2 3.2 0 1 0 4.8 3.8 3.8 3.8 0 1 1-4.8-3.8Z"
        fill="#fff"
      />
      <circle cx="10.1" cy="27.4" r="3.1" fill="#fff" />
    </svg>
  );
}

function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <div className="visual-grid" />
      {type === "earnify" && (
        <>
          <div className="earnify-beam" />
          <div className="earnify-metric metric-users">
            <strong>1.9K</strong>
            <span>USERS</span>
          </div>
          <div className="earnify-metric metric-downloads">
            <strong>1K+</strong>
            <span>DOWNLOADS</span>
          </div>
          <div className="phone">
            <img src={earnifyLogo} alt="" />
            <small>EARNIFY</small>
          </div>
        </>
      )}
      {type === "adpro" && (
        <div className="code-window">
          <i />
          <i />
          <i />
          <VisualBrandMark brand="androidStudio" />
          <p>AD / INTEGRATION</p>
          <strong>PRO</strong>
        </div>
      )}
      {type === "grid" && (
        <>
          <img
            className="grid-intelligence-image"
            src={gridIntelligenceImage}
            alt=""
          />
          <div className="grid-intelligence-shade" />
          <div className="grid-telemetry">
            <span>FAULT SIGNAL</span>
            <span>MONITORING / CONTROL</span>
          </div>
        </>
      )}
      {type === "fog" && (
        <>
          <div className="cube">
            <span className="cube-frame" />
            <VisualBrandMark brand="blender" />
          </div>
          <div className="mist one" />
          <div className="mist two" />
        </>
      )}
      <span className="visual-label">{title}</span>
    </div>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };
    const hash = window.location.hash.replace("#", "");
    const scrollFrame = window.requestAnimationFrame(() => {
      if (hash) document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
    window.addEventListener("pointermove", move);
    return () => {
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="site-shell">
      <Helmet>
        <title>Santosh Kumar Chaudhary | Electrical and Electronics Engineer</title>
        <meta
          name="description"
          content="Portfolio of Santosh Kumar Chaudhary, an Electrical and Electronics Engineer working across power-system protection, intelligent automation, applied AI and Android products."
        />
        <link rel="canonical" href="https://www.santoshkumarchaudhary.com.np/" />
      </Helmet>

      <div className="cursor-glow" />
      <Header />

      <main>
        <section className="hero" id="home">
          <motion.div
            className="hero-image-wrap"
            initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 32px 32px)" }}
            animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 32px 32px)" }}
            transition={{ duration: 1.15, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={process.env.PUBLIC_URL + "/hero-portrait.png"}
              alt="Santosh Kumar Chaudhary"
            />
          </motion.div>
          <motion.div
            className="hero-name"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>
              <span className="hero-given-name">Santosh Kumar</span>
              <span className="hero-family-name">Chaudhary</span>
            </h1>
            <p>
              Electrical & Electronics Engineer
            </p>
          </motion.div>
          <p className="hero-location">
            <NepalFlag />
            <span>NEPAL</span>
          </p>
          <p className="hero-role">
            POWER SYSTEMS / INTELLIGENT AUTOMATION
          </p>
        </section>

        <section className="intro" id="about">
          <div className="about-heading">
            <div className="about-heading-meta">
              <motion.p {...reveal} className="eyebrow">
                ABOUT
              </motion.p>
              <motion.p {...reveal} className="about-status">
                <span aria-hidden="true" />
                POWER SYSTEMS / AUTOMATION / SOFTWARE
              </motion.p>
            </div>
            <motion.h2 {...reveal} id="about-title">
              <span>Power systems at the core.</span>
              <span>Automation and software in practice.</span>
            </motion.h2>
          </div>

          <div className="about-body">
            <motion.article
              {...reveal}
              className="about-story"
              aria-labelledby="about-title"
            >
              <div className="about-story-content">
                <div className="about-narrative">
                  <p className="intro-lead">
                    I am an Electrical and Electronics Engineer based in Nepal,
                    working where{" "}
                    <span className="about-story-emphasis">
                      power-system protection, intelligent automation and
                      engineering software meet.
                    </span>
                  </p>

                  <div className="intro-copy">
                    <p>
                      My work begins with electrical systems: fault analysis,
                      protection, control and practical design. At Nepal
                      Engineering College, affiliated with Pokhara University,
                      I led a simulation-validated fault-classification project
                      and presented the resulting first-author research at IEEE
                      ICTP 2026.
                    </p>
                    <p>
                      Beyond analysis, I build working implementations. My
                      experience includes electrical work for an in-house data
                      centre, industrial training at Nepal Electricity
                      Authority's Lahan 132 kV substation, and Android, Firebase
                      and TensorFlow Lite development. The method stays
                      consistent: understand the system, test the logic and make
                      the result usable.
                    </p>
                  </div>

                  <div className="about-actions">
                    <a
                      className="text-link"
                      href={process.env.PUBLIC_URL + "/CV.pdf"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VIEW ACADEMIC CV <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>

                <aside
                  className="about-capability-rail"
                  aria-labelledby="core-practice-title"
                >
                  <p className="about-rail-title" id="core-practice-title">
                    CORE PRACTICE
                  </p>
                  <ul
                    className="about-domain-list"
                    aria-label="Core engineering areas"
                  >
                    <li>
                      <span>POWER SYSTEMS &amp; PROTECTION</span>
                      <p>
                        Fault analysis, system modelling and protection studies
                        grounded in simulation and field exposure.
                      </p>
                    </li>
                    <li>
                      <span>AUTOMATION &amp; CONTROL</span>
                      <p>
                        PLC logic, HMI configuration and connected monitoring
                        supported by practical motor-control work.
                      </p>
                    </li>
                    <li>
                      <span>ENGINEERING SOFTWARE</span>
                      <p>
                        Android, Firebase and TensorFlow Lite tools for
                        research, monitoring and live digital products.
                      </p>
                    </li>
                  </ul>
                </aside>

                <aside
                  className="about-detail-rail"
                  aria-labelledby="profile-details-title"
                >
                  <p className="about-rail-title" id="profile-details-title">
                    PROFILE DETAILS
                  </p>
                  <dl className="about-facts">
                    <div>
                      <dt>Based in</dt>
                      <dd>Nepal</dd>
                    </div>
                    <div>
                      <dt>Education</dt>
                      <dd>B.E. Electrical &amp; Electronics Engineering</dd>
                    </div>
                    <div>
                      <dt>Published research</dt>
                      <dd>2 IEEE ICTP 2026 papers</dd>
                    </div>
                  </dl>
                </aside>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="research" id="research">
          <div className="section-head">
            <p className="eyebrow">SELECTED RESEARCH</p>
            <span>SIGNAL / MODEL / SYSTEM</span>
          </div>
          <motion.div {...reveal} className="research-intro">
            <h2>
              <span>Research built to be tested.</span>
              <span>Results built to be used.</span>
            </h2>
          </motion.div>
          <div className="research-grid">
            {papers.map((paper) => (
              <motion.a
                {...reveal}
                href={paper.href}
                target="_blank"
                rel="noreferrer"
                className="research-case"
                key={paper.title}
                aria-label={`Open IEEE paper: ${paper.title}`}
              >
                <div className="research-case-top">
                  <span className="research-index">{paper.no}</span>
                  <span className="research-domain">{paper.domain}</span>
                  <ArrowUpRight />
                </div>
                <div className="research-ieee-bar">
                  <div className="research-ieee-mark">
                    <strong>IEEE</strong>
                    <span>XPLORE</span>
                  </div>
                  <div className="research-ieee-meta">
                    <span>{paper.publication}</span>
                    <strong>{paper.role}</strong>
                  </div>
                </div>
                <div className="research-case-lead">
                  <h3>{paper.title}</h3>
                  {paper.award && (
                    <div className="research-award">
                      <span className="research-award-mark" aria-hidden="true">
                        ★
                      </span>
                      <div>
                        <strong>{paper.award.title}</strong>
                        <span>{paper.award.detail}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="research-metrics">
                  {paper.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="research-abstract">
                  <div className="research-abstract-head">
                    <span>ABSTRACT</span>
                    <strong>
                      {paper.cta}
                      <ArrowUpRight aria-hidden="true" />
                    </strong>
                  </div>
                  <p>{paper.abstract}</p>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div {...reveal} className="research-progress">
            <div className="research-progress-mark">
              <i />
              <span>IN DEVELOPMENT</span>
            </div>
            <h3>Comparative Wavelet Study for ANN-Based Fault Classification</h3>
            <div className="research-progress-detail">
              <p>
                A controlled comparison of wavelet families, decomposition
                depths and feature sets, designed to expose the trade-off
                between classification reliability and computational cost.
              </p>
              <div className="research-progress-tags">
                <span>WAVELET FAMILY</span>
                <span>DECOMPOSITION DEPTH</span>
                <span>ROBUSTNESS</span>
                <span>COMPUTE COST</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="work" id="work">
          <div className="section-head">
            <p className="eyebrow">SELECTED WORK</p>
            <span>BUILT / VALIDATED / RELEASED</span>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <motion.article {...reveal} className="project-row" key={project.title}>
                <div className="project-info">
                  <span className="project-no">{project.no}</span>
                  <div>
                    <p className="project-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span>CONTRIBUTION</span>
                      <span>{project.scope}</span>
                    </div>
                    <p>{project.text}</p>
                    <span className="project-facts-label">
                      SELECTED OUTCOMES
                    </span>
                    <ul className="project-facts">
                      {project.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.cta} <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="status">{project.status}</span>
                    )}
                  </div>
                </div>
                <ProjectVisual type={project.visual} title={project.title} />
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="section-head">
            <p className="eyebrow">EXPERIENCE</p>
            <span>DESIGN + OPERATIONS + CONTROL</span>
          </div>
          <motion.div {...reveal} className="experience-overview">
            <div className="experience-overview-copy">
              <h2>
                <span>Electrical engineering</span>
                <span>from design desk to live infrastructure.</span>
              </h2>
            </div>
            <div className="experience-spectrum" aria-label="Engineering environments">
              {experiencePath.map((item) => (
                <div key={item.no}>
                  <b>{item.no}</b>
                  <strong>{item.environment}</strong>
                  <small>{item.focus}</small>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="experience-log">
            {experienceStations.map((item) => (
              <motion.article {...reveal} className="experience-entry" key={item.no}>
                <div className="experience-entry-index" aria-hidden="true">
                  <span>{item.no}</span>
                  <i />
                </div>
                <div className="experience-company">
                  <span>{item.type}</span>
                  <h3>{item.company}</h3>
                  <small>{item.place}</small>
                </div>
                <div className="experience-position">
                  <time>{item.period}</time>
                  <span>ROLE</span>
                  <h4>{item.role}</h4>
                </div>
                <div className="experience-field-note">
                  <span>ENGINEERING NOTE</span>
                  <p>{item.text}</p>
                  <ul>
                    {item.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.article {...reveal} className="control-training">
            <div className="control-training-heading">
              <p>
                <i aria-hidden="true" /> CONTROL SYSTEMS TRAINING
              </p>
              <h3>{controlTraining.title}</h3>
              <span>{controlTraining.organisation}</span>
              <div className="control-training-track" aria-hidden="true">
                <small>INPUT</small>
                <i />
                <small>PLC</small>
                <i />
                <small>OUTPUT</small>
              </div>
            </div>
            <div className="control-training-detail">
              <div>
                <time>{controlTraining.period}</time>
                <span>{controlTraining.detail}</span>
              </div>
              <p>{controlTraining.text}</p>
              <ul>
                {controlTraining.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </section>

        <section className="expertise" id="capabilities" aria-labelledby="capabilities-title">
          <div className="section-head">
            <p className="eyebrow" id="capabilities-title">CAPABILITIES</p>
            <span>ENGINEERING + AI + PRODUCT</span>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <motion.article {...reveal} className="capability" key={capability.title}>
                <div className="capability-title">
                  <span><i aria-hidden="true" /> {capability.label}</span>
                  <h3>{capability.title}</h3>
                </div>
                <p>{capability.text}</p>
                <ul aria-label={`${capability.title} toolkit`}>
                  {capability.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="leadership" id="leadership" aria-labelledby="leadership-title">
          <div className="section-head">
            <p className="eyebrow" id="leadership-title">LEADERSHIP & RECOGNITION</p>
            <span>COMMUNITY + SERVICE</span>
          </div>
        
          <div className="leadership-grid">
            {leadership.map((item) => (
              <motion.article {...reveal} className="leadership-card" key={item.title}>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <small>{item.organisation}</small>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="recognition-block" aria-labelledby="recognition-title">
            <motion.div {...reveal} className="recognition-intro">
              <h3 id="recognition-title">Recognition <em>& activities.</em></h3>
            </motion.div>
            <div className="recognition-list">
              {recognition.map((item) => (
                <motion.div {...reveal} className="recognition-row" key={item.no}>
                  <span>{item.no}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics" id="metrics" aria-label="Professional profile highlights">
          <div className="metrics-grid">
            {profileHighlights.map((signal) => (
              <motion.article {...reveal} className="metric-card" key={signal.no}>
                
                <strong className="metric-value">
                  <CountUp
                    end={signal.value}
                    duration={reducedMotion ? 0 : 1.7}
                    separator=","
                    suffix={signal.suffix}
                    enableScrollSpy={!reducedMotion}
                    scrollSpyOnce
                  />
                </strong>
                <span className="metric-label">{signal.label}</span>
                <p>{signal.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>
            Have a challenge?
            <br />
            <a href={profileLinks.email}>
              Let's talk.
              <ArrowUpRight />
            </a>
          </h2>
          <div className="contact-bottom">
            <div>
              <a href={profileLinks.scholar} target="_blank" rel="noreferrer">
                GOOGLE SCHOLAR <ArrowUpRight size={12} />
              </a>
              <a href={profileLinks.github} target="_blank" rel="noreferrer">
                GITHUB <ArrowUpRight size={12} />
              </a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
                LINKEDIN <ArrowUpRight size={12} />
              </a>
              <a href={profileLinks.orcid} target="_blank" rel="noreferrer">
                ORCID <ArrowUpRight size={12} />
              </a>
            </div>
           
          </div>
        </section>
      </main>

      <footer>
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} SANTOSH KUMAR CHAUDHARY
        </span>
         <p className="contact-note">BASED IN NEPAL · OPEN TO GLOBAL OPPORTUNITIES</p>
        <a href="#home">BACK TO TOP &#8593;</a>
      </footer>
    </div>
  );
}
