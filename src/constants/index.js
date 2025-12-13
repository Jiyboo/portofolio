
import {
  logo,
  networking,
  ui,
  qa,
  fullstack,
  github,
  link,
  menu,
  java,
  close,
  css,
  project2,
  project3,
  project4,
  project5,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  smaw,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from '../assets'


import Puninar from "../assets/company/Puninar.png";
import Vocasia from "../assets/company/Vocasia.png";
import Depok from "../assets/company/Depok.png";
import Askrindo from "../assets/company/Askrindo.png";

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullstack,
    description:
      "Designing and developing end-to-end web applications, from frontend to backend, including database integration and deployment.",
  },
  {
    title: "Quality Assurance",
    icon: qa,
    description:
      "Ensuring software quality through comprehensive manual and automated testing to deliver reliable, bug-free solutions.",
  },
  {
    title: "Networking",
    icon: networking,
    description:
      "Proficient in computer networking concepts, device configuration, and troubleshooting to maintain secure and stable connectivity.",
  },
  {
    title: "UI/UX Designer",
    icon: ui,
    description:
      "Creating visually engaging and user-friendly interfaces with a strong focus on usability and seamless user experience.",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "SMAW",
    icon: smaw,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
{
  title: "IT Functional",
  company_name: "PT Puninar Jaya",
  icon: Puninar,
  iconBg: "#383E56",
  date: "Dec 2025 - Present",
  comingSoon: true,
  points: [],
},

  {
    title: "Full Stack",
    company_name: "Office of the Mayor of Depok",
    icon: Depok,
    iconBg: "#383E56",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Design, develop, and maintain a public complaint management fullstacksite using pure PHP, ensuring secure data handling and a user-friendly interface for citizens to submit and track complaints.",
      "Build and manage a student information management system using CodeIgniter 4, including modules for student data processing, reporting, and administrative workflows.",
      "Develop both front-end and back-end components, integrate databases, and ensure seamless communication between system modules.",
      "Implement authentication, authorization, and data validation to maintain security and integrity of user information.",
      "Optimize application performance and ensure compatibility across browsers and devices.",
    ],
  },
  {
    title: "QA Engginer",
    company_name: "PT Yayasan Inovasi Asia (Vocasia)",
    icon: Vocasia,
    iconBg: "#383E56",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Conduct manual testing to ensure that new features and existing functionalities meet specified requirements and quality standards.",
      "Perform automated testing using Cypress and other relevant tools to validate application stability and performance.",
      "Design and develop comprehensive test cases and test scenarios covering functional, non-functional, and regression aspects.",
      "Log and document defects/bugs clearly and accurately in the tracking system, including detailed reproduction steps and severity levels.",
      "Collaborate closely with developers and other stakeholders to clarify requirements, reproduce issues, and verify fixes.",
      "Create and maintain automated test scripts to improve test coverage, reduce manual effort, and support continuous integration/continuous delivery (CI/CD) processes."
    ],
  },
    {
    title: "IT Support",
    company_name: "PT Asuransi Kredit Indonesia (Akrindo)",
    icon: Askrindo,
    iconBg: "#383E56",
    date: "Jan 2020 - Mar 2020",
    points: [
      "Assisted in the configuration, maintenance, and monitoring of servers, ensuring stable and secure operation.",
      "Assembled and upgraded desktop computers and performed hardware installations as required.",
      "Installed, configured, and updated essential software and applications to meet organizational needs.",
      "Diagnosed, troubleshot, and resolved hardware and software issues on laptops and desktop PCs to minimize downtime.",
      "Configured and maintained network infrastructure, including switches, routers, and basic connectivity setups.",
      "Provided general technical support to staff and ensured proper documentation of IT procedures."
    ],
  },
];
export const tagLinks = {
  php: "https://www.php.net",
  "ci-4": "https://codeigniter.com/user_guide/",
  "ci-3": "https://codeigniter.com/user_guide_3/",
  mysql: "https://www.mysql.com",
  js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  java: "https://www.java.com",
  apache: "https://httpd.apache.org/",
  jasper: "https://community.jaspersoft.com/",
};

const projects = [
  {
name: "Warehouse Management Application",
description:
  "This desktop-based Warehouse Management Application is designed to efficiently handle the inflow and outflow of goods across one or multiple warehouses. It also records incoming goods from suppliers, ensuring accurate inventory tracking and streamlined warehouse operations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "jasper",
        color: "white-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "apache",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://drive.google.com/file/d/15D5xXGGSoORDuph_9ofpCwZ7AVEMWjRM/view?usp=sharing",
  },
    {
name: "Student Information Management System (fullstack-based)",
description:
  "A fullstack-based student management platform for processing internship reports, supporting multi-user access and academic supervision workflows.",
  tags: [
      {
        name: "CI-4",
        color: "red-text-gradient",
      },
      {
        name: "PHP",
        color: "white-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
 
    ],
    image: project3,
    source_code_link: "https://github.com/Jiyboo/kelola_mahasiswa.git",
  },

  {
 name: "Public Complaint System",
  description:
    "A fullstack-based platform that allows citizens to submit and track complaints, with multi-user access for administrators and officials.",
     tags: [
      {
        name: "PHP",
        color: "white-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
 
    ],
    image: project4,
    source_code_link: "https://github.com/Jiyboo/pengaduan_masyarakat.git",
  },
   {
 name: "Parking System (fullstack-based",
  description:
    "This web-based Parking Management System is designed to efficiently manage parking areas, vehicle records, and parking transactions. It allows administrators to add users and customize roles with specific permissions, ensuring secure access control and streamlined parking operations.",
     tags: [
      {
        name: "CI-3",
        color: "red-text-gradient",
      },
      {
        name: "PHP",
        color: "white-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
 
    ],
    image: project5,
    source_code_link: "https://parking.gamer.gd/",
  },

];

export { services, technologies, experiences, projects };
