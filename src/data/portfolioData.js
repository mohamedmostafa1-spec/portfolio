export const portfolioData = {
  personalInfo: {
    name: "Mohamed Mostafa Farag",
    title: "Junior Frontend Developer (React)",
    location: "Egypt",
    email: "mohamed2016mostafa@gmail.com",
    cvUrl: "/cv.pdf",
    linkedin: "https://www.linkedin.com/in/mohamed-mostafa-080085210/",
    pitch: "Computer Science graduate passionate about building responsive, user-friendly web interfaces with React, JavaScript, HTML, and CSS.",
    summary:
      "Computer Science graduate (Arab Open University, 2025) focused on building responsive, user-friendly interfaces with React, JavaScript, HTML, and CSS. Quick learner with strong problem-solving skills, seeking an entry-level frontend role to contribute to a development team.",
    availability: "Available for entry-level frontend roles",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Proficient" },
    ],
  },

  skills: [
    {
      category: "Frontend",
      description: "Crafting modern, responsive, and intuitive user experiences",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      highlight: true,
    },
    {
      category: "Backend & APIs",
      description: "Connecting client applications with server-side logic and services",
      skills: ["Python", "Flask"],
      highlight: false,
    },
    {
      category: "Machine Learning",
      description: "Integrating trained neural network models into web applications",
      skills: ["TensorFlow", "Deep Learning"],
      highlight: false,
    },
    {
      category: "Other Languages",
      description: "Object-oriented programming and algorithmic fundamentals",
      skills: ["Java", "C#"],
      highlight: false,
    },
    {
      category: "Soft Skills",
      description: "Collaborative and professional attributes that drive team success",
      skills: [
        "Problem-solving",
        "Team collaboration",
        "Fast learner",
        "Research",
      ],
      highlight: false,
    },
  ],

  // Single array of project data: add more projects here effortlessly!
  projects: [
    {
      id: "retinal-disease-detection",
      title: "Retinal Disease Detection Web Application",
      badge: "Graduation Project",
      shortDescription:
        "A full-stack web application that detects retinal diseases from eye images, integrating a TensorFlow deep learning model with a Flask backend.",
      highlights: [
        "Designed and built the complete user interface using HTML, CSS, and JavaScript: users upload an eye image and view detection results in real time.",
        "Independently handled the full lifecycle: medical image data handling, model integration, backend API development, and UI design.",
        "Engineered an intuitive visual flow for non-technical users to inspect diagnostic predictions."
      ],
      techStack: [
        "TensorFlow",
        "Flask",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      visualType: "neural-scan", // Renders custom CSS/SVG visual placeholder
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Arab Open University",
      location: "Egypt",
      year: "Graduated 2025",
      details:
        "Comprehensive Computer Science curriculum covering core software engineering, algorithms, data structures, and database principles, culminating in an AI-powered graduation project.",
    },
  ],

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};
