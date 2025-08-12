// src/data.ts

// This file holds all the customizable data for your portfolio.
// To change any content, you only need to edit this file.

export const portfolioData = {
  name: "Samuel Peddakudala",
  title:
    "An HR Manager turned Frontend Developer with 8+ years of experience in talent acquisition, now building stunning and user-friendly web applications.",
  aboutText: `I'm a passionate Frontend Developer with a unique background in HR recruitment. After 8+ years of hiring top tech talent, I realized I wanted to <em>become</em> the talent I was searching for — and made the leap into software development.
  
  Now, I specialize in building responsive, user-friendly web apps using React, JavaScript, HTML, and CSS. My strengths in communication, attention to detail, and problem-solving—honed in HR—translate directly into writing clean, maintainable code and creating intuitive UI experiences.
  
  I’m continually learning and refining my skills in modern frontend technologies, and I focus on creating projects that deliver real impact.`,
  photoUrl: "/picture.jpg",
  contactInfo: {
    // This is the single, correct contactInfo object
    email: "samuelpeddakudala@gmail.com",
    phone: "+91 9686644774",
    linkedin: "https://www.linkedin.com/in/samuel-peddakudala",
    github: "https://github.com/codebysamuel",
  },
  skills: [
    { name: "HTML", icon: "FileCode" },
    { name: "CSS", icon: "Palette" },
    { name: "JavaScript", icon: "Terminal" },
    { name: "TypeScript", icon: "Cpu" },
    { name: "ReactJS", icon: "Layers" },
    { name: "React Native", icon: "Smartphone" },
    { name: "Tailwind CSS", icon: "Layout" },
    { name: "Git", icon: "GitBranch" },
  ],
  projects: [
    {
      title: "neura-talk",
      description:
        "A sleek AI-powered chat app built with React Native and OpenAI’s GPT, offering a natural conversational experience.",
      githubUrl: "https://github.com/codebysamuel/neura-talk",
      technologies: ["React Native", "Axios", "OpenAI API", "Hugging Face API"],
      screenshotUrl: "/neura-talk.png",
    },
    {
      title: "pixplorer",
      description: "A dynamic image search engine powered by the Unsplash API.",
      githubUrl: "https://github.com/codebysamuel/pixplorer",
      technologies: ["ReactJS", "CSS", "Unsplash API", "Axios"],
      screenshotUrl: "/pixplorer.png",
    },
    {
      title: "little-lemon-ui",
      description:
        "A restaurant reservation and menu UI based on Meta’s capstone project. Customized and extended.",
      githubUrl: "https://github.com/codebysamuel/little-lemon-ui",
      technologies: ["ReactJS", "CSS", "HTML", "Bootstrap", "Font Awesome"],
      screenshotUrl: "/little-lemon-ui.png",
    },
    {
      title: "animal-clicker",
      description:
        "A playful image gallery app where clicking reveals random animal images.",
      githubUrl: "https://github.com/codebysamuel/animal-clicker",
      technologies: ["ReactJS", "CSS"],
      screenshotUrl: "/animal-clicker.png",
    },
    {
      title: "currex",
      description:
        "A clean currency converter app powered by ExchangeRate API.",
      githubUrl: "https://github.com/codebysamuel/currex",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "ExchangeRate API",
        "Flags API",
      ],
      screenshotUrl: "/currex.png",
    },
    {
      title: "sky-cast",
      description: "A sleek weather forecasting app using OpenWeather API.",
      githubUrl: "https://github.com/codebysamuel/sky-cast",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      screenshotUrl: "/sky-cast.png",
    },
  ],
  certifications: [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuingOrganization: "Coursera",
      date: "Aug 15, 2024",
      link: "https://coursera.org/verify/professional-cert/GIXD9QJ917GP",
    },
    {
      name: "The Best React Native Course 2025 (From Beginner To Expert)",
      issuingOrganization: "Udemy",
      date: "July 29, 2025",
      link: "https://ude.my/UC-cd49d013-6ee6-43fd-b050-59e54629edca",
    },
    {
      name: "Learn JavaScript Course",
      issuingOrganization: "LEARNJAVASCRIPT.ONLINE",
      date: "September 9, 2024",
      link: "https://learnjavascript.online",
    },
  ],
};
