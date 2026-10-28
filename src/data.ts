// All profile content lives here. Edit this file to update the page.

export interface Link {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  description: string;
  href: string;
}

export interface ResearchProject {
  tag: string;
  title: string;
  date: string;
  points: string[];
}

export interface Role {
  title: string;
  org: string;
  date: string;
  current?: boolean;
  points: string[];
}

export interface Degree {
  year: string;
  title: string;
  school: string;
  detail: string;
}

export interface Project {
  tag: string;
  title: string;
  date: string;
  description: string;
  link?: Link;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ListEntry {
  title: string;
  detail: string;
  date: string;
}

export const profile = {
  name: "Richard Kofi Doh",
  shortName: "Richard K. Doh",
  eyebrow: "AI Researcher · Computer Scientist · Educator",
  role: "MPhil Computer Science (Artificial Intelligence), KNUST",
  lead:
    "Machine learning and deep learning researcher building AI for healthcare security, accessibility and " +
    "education. IEEE-published author, Elsevier Certified Peer Reviewer and former Graduate Assistant at the " +
    "Department of Computer Science, Kwame Nkrumah University of Science and Technology.",
  location: "Kumasi, Ghana",
  email: "drk.richarddoh@gmail.com",
  photo: "richard-doh.jpg",
  links: {
    linkedin: "https://gh.linkedin.com/in/doh-richard-438b75218",
    github: "https://github.com/RichardDoh",
    ieee: "https://ieeexplore.ieee.org/author/632664410619731",
  },
};

export const stats = [
  { value: "2", label: "IEEE Publications" },
  { value: "7", label: "Professional Certifications" },
  { value: "3", label: "Research Projects" },
  { value: "6+", label: "Years Teaching & Research" },
];

export const about = [
  "Richard Kofi Doh is a Ghanaian computer scientist and artificial intelligence researcher. He holds a Master of " +
    "Philosophy in Computer Science with a major in Artificial Intelligence and a Bachelor of Science in Computer " +
    "Science, both from the Kwame Nkrumah University of Science and Technology (KNUST), Kumasi.",
  "His research applies machine learning and deep learning to real problems: transformer-based intrusion detection " +
    "for the Internet of Medical Things (IoMT), sign language translation for more inclusive healthcare, and " +
    "solar-powered offline science laboratories that bring quality education to rural communities in support of " +
    "UN Sustainable Development Goal 4.",
  "Alongside research, Richard has served the Department of Computer Science at KNUST as Graduate Assistant, " +
    "Research Assistant, Teaching Assistant and Class Representative — lecturing courses, supervising theses and " +
    "supporting departmental administration. He most recently worked as an Image Annotation Specialist with 4th-IR " +
    "on a large-scale data initiative with EPAM for a Google project.",
  "He is committed to mentoring the next generation, leading AI, robotics and academic-writing workshops for " +
    "students from junior high school to university level.",
];

export const interests = [
  "Machine Learning",
  "Deep Learning",
  "AI for Cybersecurity",
  "Internet of Medical Things",
  "Computer Vision",
  "AI in Healthcare",
  "Sign Language Translation",
  "AI for Education",
];

export const facts: [string, string][] = [
  ["Current role", "Research Assistant, KNUST"],
  ["Highest degree", "MPhil, Computer Science (AI)"],
  ["Institution", "KNUST, Kumasi"],
  ["Focus", "ML / DL Research"],
  ["Peer review", "Elsevier Certified"],
  ["Location", "Ghana"],
];

export const hobbies = "Plays the piano at leisure and reads widely — from books to the latest research papers.";

// TODO: replace titles/descriptions with the exact paper details from IEEE Xplore.
export const publications: Publication[] = [
  {
    title: "First Publication — IEEE Xplore",
    description: "Peer-reviewed publication indexed in the IEEE Xplore Digital Library.",
    href: "https://ieeexplore.ieee.org/author/632664410619731",
  },
  {
    title: "Second Publication — IEEE Xplore",
    description: "Peer-reviewed publication indexed in the IEEE Xplore Digital Library.",
    href: "https://ieeexplore.ieee.org/document/11727491",
  },
];

export const research: ResearchProject[] = [
  {
    tag: "Cybersecurity · Healthcare AI",
    title: "FTIoMT: A Multiclass Transformer-based Intrusion Detection System for the Internet of Medical Things",
    date: "June 2025",
    points: [
      "Collected and cleaned the CICIoMT2024 dataset.",
      "Preprocessed data and trained a transformer model for multiclass attack detection.",
      "Evaluated the model on a held-out test set.",
      "Comparative analysis showed the proposed model outperformed existing models.",
    ],
  },
  {
    tag: "Accessibility · Computer Vision",
    title: "AfriSign: Sign Language Translation for Enhanced Healthcare",
    date: "Jan 2024 – May 2024",
    points: [
      "Designed the data-curation approach with the research team.",
      "Curated two datasets in health and education.",
      "Built a video dataset of African sign language words and phrases.",
      "Fine-tuned a MobileNet model for sign language translation.",
    ],
  },
  {
    tag: "Education · SDG 4",
    title: "Achieving SDG-4 in Rural Areas: An Offline Lab Simulation Using Solar-Powered Raspberry Pi",
    date: "Nov 2023",
    points: [
      "Developed the web application for the offline lab.",
      "Built and experimentally tested the solar power module.",
      "Demonstrated a working offline e-science laboratory for rural schools.",
    ],
  },
];

const KNUST_CS = "Department of Computer Science, KNUST · Kumasi, Ghana";

export const experience: Role[] = [
  {
    title: "Research Assistant",
    org: KNUST_CS,
    date: "Nov 2023 – Present",
    current: true,
    points: [
      "Conducts research in machine learning and deep learning.",
      "Reviews current literature across a range of AI topics.",
      "Supports academic writing and data collection.",
    ],
  },
  {
    title: "Image Annotation Specialist",
    org: "Inngen Technology Solutions Limited (4th-IR) · Accra, Ghana",
    date: "Oct 2025 – Dec 2025",
    points: [
      "Contributed to large-scale data annotation in collaboration with EPAM on a high-value Google project.",
      "Maintained quality standards and helped streamline data-processing workflows.",
    ],
  },
  {
    title: "Graduate Assistant",
    org: KNUST_CS,
    date: "Jan 2025 – Sep 2025",
    points: [
      "Lectured courses in the Department.",
      "Assisted the Head of Department with administrative duties.",
      "Reviewed and supported Master's and undergraduate thesis projects.",
    ],
  },
  {
    title: "Class Representative",
    org: KNUST_CS,
    date: "Jan 2024 – Aug 2024",
    points: [
      "Brought a diverse class together around shared goals.",
      "Assisted lecturers in organising class sessions and ran catch-up workshops.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: KNUST_CS,
    date: "Nov 2022 – Sep 2023",
    points: [
      "Facilitated tutorials for students and prepared lecture materials.",
      "Assisted in processing examination results for undergraduate students.",
    ],
  },
  {
    title: "Course Assistant — Cyber Security & Digital Forensics Crash Course",
    org: "KNUST · Kumasi, Ghana",
    date: "Nov 2022",
    points: ["Installed security and digital forensics tools and supported participants."],
  },
  {
    title: "B.Sc. Intern (ICT Teacher & Lab Assistant)",
    org: "Osino Senior High School · Fanteakwa South District, Ghana",
    date: "Oct 2021 – Nov 2021",
    points: [
      "Taught Core and Elective ICT, with tutorials in Excel, Word and HTML.",
      "Managed the school's server system and assisted the HOD's graduate thesis.",
    ],
  },
  {
    title: "Assistant Robotics Tutor",
    org: "Our Lady of Grace Senior High School · Kumasi, Ghana",
    date: "Aug 2019 – Feb 2020",
    points: [
      "Led interactive robotics and programming lab sessions using LEGO EV3.",
      "Developed lesson plans and assessed student performance with constructive feedback.",
    ],
  },
];

export const education: Degree[] = [
  {
    year: "2025",
    title: "Master of Philosophy in Computer Science — Artificial Intelligence",
    school: "Kwame Nkrumah University of Science and Technology (KNUST)",
    detail: "Kumasi, Ghana · Jan 2024 – Nov 2025",
  },
  {
    year: "2022",
    title: "Bachelor of Science in Computer Science",
    school: "Kwame Nkrumah University of Science and Technology (KNUST)",
    detail: "Kumasi, Ghana · Sep 2018 – Nov 2022",
  },
  {
    year: "2018",
    title: "General Science",
    school: "St. Peter's Senior High School",
    detail: "Nkwatia-Kwahu, Ghana · Sep 2015 – May 2018",
  },
];

export const projects: Project[] = [
  {
    tag: "AI / ML · Genomics",
    title: "Polygenic Risk Score Estimation for Breast Cancer Using Deep Neural Networks",
    date: "Nov 2024",
    description:
      "Collaborated on debugging and running a deep neural network that improved polygenic risk score estimation " +
      "for breast cancer, achieving an AUC of 0.95 on the test set.",
  },
  {
    tag: "AI / ML · Accessibility",
    title: "Sign Language Translation to Text using YOLOv11",
    date: "Oct 2024",
    description:
      "Designed and implemented a deep learning model that detects sign language gestures and translates them " +
      "into text, advancing accessibility solutions.",
  },
  {
    tag: "AI / ML · Computer Vision",
    title: "Object Detection with YOLOv11",
    date: "Oct 2024",
    description: "Designed and implemented a deep learning object detection model achieving strong detection accuracy.",
  },
  {
    tag: "Analytics",
    title: "Automated TV Ranking & Trend Dashboard with Power BI and SQL",
    date: "Apr 2025",
    description: "Built an automated dashboard ranking TV stations per year, with year-on-year trend analytics.",
  },
  {
    tag: "Web",
    title: "Ghana National Association of Authors and Publishers Website",
    date: "Oct 2023",
    description:
      "Collaboratively designed and deployed the official website for the Ghana National Association of Authors " +
      "and Publishers.",
  },
  {
    tag: "Open source",
    title: "Code & Repositories",
    date: "Ongoing",
    description: "Research code and personal projects are shared on GitHub.",
    link: { label: "github.com/RichardDoh", href: "https://github.com/RichardDoh" },
  },
];

export const certifications: Certification[] = [
  { name: "Elsevier Certified Peer Reviewer", issuer: "Elsevier Researcher Academy" },
  { name: "Generative AI Use in the Research Workflow", issuer: "Elsevier Researcher Academy" },
  { name: "Research Gap Identification", issuer: "Elsevier Researcher Academy" },
  { name: "UiPath Certified Professional — Automation Developer Associate", issuer: "UiPath" },
  { name: "Software Development Certification", issuer: "UITS, KNUST" },
  { name: "Python", issuer: "Kaggle" },
  { name: "Intro to Programming", issuer: "Kaggle" },
];

export const skills: SkillGroup[] = [
  { title: "Languages & Data", items: ["Python", "C#", "SQL", "HTML"] },
  {
    title: "AI & Computer Vision",
    items: ["PyTorch", "TensorFlow", "OpenCV", "MediaPipe", "YOLO", "Transformers", "MobileNet"],
  },
  { title: "Tools & Platforms", items: ["Power BI", "SSMS", "Visual Studio", "VS Code", "UiPath", "Raspberry Pi"] },
];

export const workshops: ListEntry[] = [
  { title: "Ghana Data Science Summit (IndabaX)", detail: "KNUST, Ghana", date: "Jul 2024" },
  { title: "Google & Responsible AI Lab (RAIL) Machine Learning Workshop", detail: "KNUST, Ghana", date: "Oct 2023" },
  { title: "Research and Academic Writing Clinic", detail: "KNUST, Ghana", date: "Mar 2023" },
];

export const volunteering: ListEntry[] = [
  {
    title: "AI & Robotics Workshop Lead",
    detail:
      "Obomeng D/A Junior High School, Kwahu — introduced programming and demystified AI and robotics for young learners.",
    date: "Sep 2023",
  },
  {
    title: "Undergraduate Thesis Workshop Lead",
    detail: "Department of Land Economy, KNUST — led academic-writing sessions and reviewed student theses.",
    date: "Aug 2023",
  },
];
