import React from "react";
import cvImage from "../assets/cv.png";

const CV = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE, Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari, Opera */
        }
      `}</style>
      <div className="block sm:hidden">
        <img
          src={cvImage}
          alt="CV Afsal Maulana"
          className="w-full h-auto"
        />
      </div>

      <div className="hidden sm:block">
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white text-gray-900 border border-gray-300 shadow-md leading-relaxed rounded-lg hide-scrollbar break-words">

          <header className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              AFSAL MAULANA
            </h1>
            <p className="mt-2 text-xs sm:text-sm">
              081387272911 |{" "}
              <a
                href="mailto:afsalonline01@gmail.com"
                className="text-blue-600 underline"
              >
                afsalonline01@gmail.com
              </a>{" "}
              | Jl. Raya Ciracas Gg Bangi 1
            </p>
          </header>

          <section className="mb-6 text-xs sm:text-sm leading-relaxed">
            <p>
              I am a graduate in Information Systems from Universitas Bina
              Sarana Informatika with a GPA of 3.90/4.00. I have a strong
              passion for information technology and hands-on internship
              experience as a Full Stack Developer, Software Tester, and IT
              Support. Additionally, I have completed several training programs
              and certifications in computer networking and computer technology.
            </p>
          </section>

          <hr className="border-t-2 border-gray-700 mb-6" />

          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">EDUCATION</h2>
            <p className="font-semibold text-sm sm:text-base">
              Universitas Bina Sarana Informatika | Information Systems
            </p>
            <p className="text-xs sm:text-sm">GPA: 3.90 / 4.00 (2021 - 2025)</p>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">
              INTERNSHIP EXPERIENCE
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-2">
              <li>
                Office of the Mayor of Depok – Full Stack Developer (Nov 2024 -
                Jan 2025)
              </li>
              <li>Vocasia – Software Tester (Feb 2024 - Jun 2024)</li>
              <li>Askrindo – IT Support (Jan 2020 - Mar 2020)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">
              NON-FORMAL EDUCATION
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-2">
              <li>Intermediate Computer Networking Training (2022)</li>
              <li>Computer Technician Training (2022)</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
              <li>BNSP – Intermediate Network Administrator (2022)</li>
              <li>BNSP – Program Analyst (2024)</li>
              <li>Computer Technician – PPKPI (2022)</li>
              <li>Intermediate Computer Networking – PPKPI (2022)</li>
              <li>3G & 4G Combination Welding (GTAW & SMAW) (2025)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base sm:text-lg mb-2">SKILLS</h2>
            <p className="text-xs sm:text-sm">
              <strong>Soft Skills:</strong> Teamwork & Collaboration,
              Leadership, Problem Solving, Attention to Detail, Time Management
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Hard Skills:</strong> Networking, Troubleshooting, Linux,
              PHP, JavaScript, HTML, CSS, CodeIgniter 3 & 4
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Software Skills:</strong> Microsoft Word, Microsoft Excel,
              Microsoft PowerPoint, Trello
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;

