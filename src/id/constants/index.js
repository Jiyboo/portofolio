
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



import Vocasia from "../assets/company/Vocasia.png";
import Depok from "../assets/company/Depok.png";
import Askrindo from "../assets/company/Askrindo.png";

export const navLinks = [


  {
    id: "about",
    title: "Tentang Saya",
    
  },
  {
    id: "works",
    title: "Pengalaman",
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
      "Merancang dan mengembangkan aplikasi web secara menyeluruh, mulai dari frontend hingga backend, termasuk integrasi basis data dan proses deployment.",
  },
  {
    title: "Quality Assurance",
    icon: qa,
    description:
      "Menjamin kualitas perangkat lunak melalui pengujian manual dan otomatis yang komprehensif untuk menghadirkan solusi andal dan bebas dari bug.",
  },
  {
    title: "Networking",
    icon: networking,
    description:
      "Menguasai konsep jaringan komputer, konfigurasi perangkat, serta troubleshooting untuk menjaga konektivitas yang aman dan stabil.",
  },
  {
    title: "UI/UX Designer",
    icon: ui,
    description:
      "Menciptakan antarmuka yang menarik secara visual dan ramah pengguna dengan fokus kuat pada aspek kegunaan dan pengalaman pengguna yang mulus.",
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
    title: "Full Stack",
    company_name: "Kantor Walikota Depok",
    icon: Depok,
    iconBg: "#383E56",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Merancang, mengembangkan, dan memelihara sistem manajemen pengaduan masyarakat berbasis fullstack menggunakan PHP murni, dengan fokus pada keamanan data serta antarmuka yang ramah pengguna untuk memudahkan masyarakat dalam menyampaikan dan memantau pengaduan.",
      "Membangun dan mengelola sistem manajemen informasi mahasiswa menggunakan CodeIgniter 4, termasuk modul untuk pengolahan data mahasiswa, pelaporan, dan alur kerja administrasi.",
      "Mengembangkan komponen frontend dan backend, mengintegrasikan basis data, serta memastikan komunikasi antar modul sistem berjalan lancar.",
      "Mengimplementasikan autentikasi, otorisasi, dan validasi data guna menjaga keamanan serta integritas informasi pengguna.",
      "Mengoptimalkan performa aplikasi dan memastikan kompatibilitas lintas browser maupun perangkat."
    ],
  },
  {
    title: "QA Engineer",
    company_name: "PT Yayasan Inovasi Asia (Vocasia)",
    icon: Vocasia,
    iconBg: "#383E56",
    date: "Feb 2024 - Jul 2024",
    points: [
      "Melakukan pengujian manual untuk memastikan fitur baru maupun fungsionalitas yang sudah ada sesuai dengan kebutuhan dan standar kualitas yang ditentukan.",
      "Melaksanakan pengujian otomatis menggunakan Cypress dan berbagai tools terkait untuk memvalidasi stabilitas serta performa aplikasi.",
      "Merancang dan mengembangkan test case serta skenario pengujian yang komprehensif, mencakup aspek fungsional, non-fungsional, dan regresi.",
      "Mencatat serta mendokumentasikan bug/defect secara jelas dan akurat pada sistem pelacakan, termasuk langkah reproduksi detail dan tingkat keparahan.",
      "Berkolaborasi erat dengan developer serta pemangku kepentingan lain untuk memperjelas kebutuhan, mereproduksi masalah, serta memverifikasi perbaikan.",
      "Membuat dan memelihara skrip uji otomatis untuk meningkatkan cakupan pengujian, mengurangi effort manual, serta mendukung proses CI/CD."
    ],
  },
  {
    title: "IT Support",
    company_name: "PT Asuransi Kredit Indonesia (Askrindo)",
    icon: Askrindo,
    iconBg: "#383E56",
    date: "Jan 2020 - Mar 2020",
    points: [
      "Mendukung konfigurasi, pemeliharaan, serta pemantauan server untuk memastikan operasional yang stabil dan aman.",
      "Merakit serta melakukan upgrade komputer desktop, termasuk instalasi perangkat keras sesuai kebutuhan.",
      "Menginstal, mengonfigurasi, dan memperbarui perangkat lunak serta aplikasi penting sesuai kebutuhan organisasi.",
      "Mendiagnosis, melakukan troubleshooting, serta menyelesaikan masalah perangkat keras maupun perangkat lunak pada laptop dan PC guna meminimalisir downtime.",
      "Mengonfigurasi dan memelihara infrastruktur jaringan, termasuk switch, router, serta pengaturan konektivitas dasar.",
      "Memberikan dukungan teknis umum kepada staf serta memastikan dokumentasi prosedur IT dilakukan dengan baik."
    ],
  },
];


const projects = [
  {
    name: "Aplikasi Manajemen Gudang",
    description:
      "Aplikasi berbasis desktop ini dirancang untuk mengelola arus masuk dan keluar barang pada satu atau beberapa gudang. Sistem ini juga mencatat barang yang masuk dari pemasok, sehingga memastikan pencatatan inventori yang akurat dan operasional gudang yang lebih efisien.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Jasper",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Apache",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link:
      "https://drive.google.com/file/d/15D5xXGGSoORDuph_9ofpCwZ7AVEMWjRM/view?usp=sharing",
  },
  {
    name: "Sistem Informasi Manajemen Mahasiswa (berbasis fullstack)",
    description:
      "Platform manajemen mahasiswa berbasis fullstack untuk memproses laporan magang, mendukung akses multi-user, serta mendukung alur kerja supervisi akademik.",
    tags: [
      {
        name: "CodeIgniter 4",
        color: "red-text-gradient",
      },
      {
        name: "PHP",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Jiyboo/kelola_mahasiswa.git",
  },

  {
    name: "Sistem Pengaduan Masyarakat",
    description:
      "Platform berbasis fullstack yang memungkinkan masyarakat untuk menyampaikan dan memantau pengaduan, dengan akses multi-user bagi administrator maupun pejabat terkait.",
    tags: [
      {
        name: "PHP",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Jiyboo/pengaduan_masyarakat.git",
  },
];


export { services, technologies, experiences, projects };
