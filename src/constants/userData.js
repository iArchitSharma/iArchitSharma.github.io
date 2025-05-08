import CGC from "../assets/cgc.png";
import Layer5 from "../assets/layer5.svg";
import ThePetGetImg from "../assets/thepetget.jpeg";
import PodCubeImg from "../assets/podcube.jpeg";
import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/JavaScript.svg";
import HTMLIcon from "../assets/HTML5.svg";
import CSSIcon from "../assets/CSS3.svg";
import BootstrapIcon from "../assets/Bootstrap.svg";
import TailwindIcon from "../assets/Tailwind CSS.svg";
import ExpressIcon from "../assets/Express.svg";
import MongoDBIcon from "../assets/MongoDB.svg";
import TypeScriptIcon from "../assets/TypeScript.svg";
import GitIcon from "../assets/Git.svg";
import GitHubIcon from "../assets/GitHub.svg";
import NextJsIcon from "../assets/Next.js.svg";
import NodeJsIcon from "../assets/Node.js.svg";

export const userData = {
  name: "Archit Sharma",
  location: "India",
  role: "Web Developer",
  role_desc:
    "Hi, I'm Archit Sharma. A dedicated frontend professional exploring backend technologies to build robust, full-stack websites.",
  socials: {
    linkedin: "https://www.linkedin.com/in/iArchitSharma/",
    github: "https://github.com/iArchitSharma",
    email: "archit8679@gmail.com",
  },
  skillsData: {
    title: "My Tech Stack",
    desc: "I'm proficient in a range of modern technologies that empower me to build highly functional solutions.",
    technologies: [
      {
        id: 1,
        name: "JavaScript",
        type: "Programming Language",
        image: JavaScriptIcon,
      },
      {
        id: 2,
        name: "TypeScript",
        type: "Programming Language",
        image: TypeScriptIcon,
      },

      {
        id: 3,
        name: "React",
        type: "JavaScript Library",
        image: ReactIcon,
      },
      {
        id: 4,
        name: "Next.js",
        type: "React Framework",
        image: NextJsIcon,
      },

      {
        id: 6,
        name: "Node.js",
        type: "JavaScript Runtime",
        image: NodeJsIcon,
      },
      {
        id: 7,
        name: "Express",
        type: "Web Framework",
        image: ExpressIcon,
      },
      {
        id: 8,
        name: "MongoDB",
        type: "Database",
        image: MongoDBIcon,
      },

      {
        id: 9,
        name: "Git",
        type: "Version Control",
        image: GitIcon,
      },
    ],
  },
  experienceData: {
    title: "Experience",
    desc: "A glimpse into my academic and profesional experience, shaping my growth in the tech world.",
    exp: [
      {
        id: 1,
        title: "Software Engineer Intern",
        company: "Layer5",
        location: "Remote",
        year: "Jan 2024 - Jul 2024",
        role: "Maintained the Layer5 Docs project, I hosted weekly website meetings and collaborated closely with the core team. My responsibilities included performing code reviews, fixing bugs, and ensuring code quality and stability.",
        image: Layer5,
      },
    ],
    edu: [
      {
        id: 1,
        degree: "Bachelor of Technology in Information Technology",
        institution: "CGC Landran",
        year: "Jul 2021 - May 2025",
        image: CGC,
      },
    ],
  },
  projectsData: {
    title: "Personal Projects",
    desc: "Code-Powered Designs in Action",
    projects: [
      {
        id: 1,
        name: "PodCube",
        description:
          "An AI website that generates podcasts from article links.",
        techStack: [
          "Next.JS",
          "TypeScript",
          "Tailwind CSS",
          "Gemini",
          "Firebase",
          "Vapi.ai"
        ],
        image: PodCubeImg,
        github: "https://github.com/iArchitSharma/PodCube",
        website: "https://pod-cube.vercel.app/",
      },
      {
        id: 2,
        name: "ThePetGet",
        description: "A pet adoption website that lets users filter by city, state, and animal type.",
        techStack: ["Next.JS", "TypeScript", "Tailwind CSS", "DaisyUI", "Axios"],
        image: ThePetGetImg,
        github: "https://github.com/iArchitSharma/the-pet-get",
        website: "https://the-pet-get.vercel.app/",
      },
    ],
  },
  contactData: {
    salutation: "Hi There",
    title: "Send me a message",
    subTitle: "Let's code your vision together.",
    emailDesc: "Mail me at",
    linkedin: "Linkedin",
    github: "Github",
  },
};
