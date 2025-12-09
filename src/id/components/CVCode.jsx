import React from "react";
import cvImage from "../assets/cv.png";

const CV = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  
          scrollbar-width: none;    
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;   
        }
      `}</style>

       {}
      <div className="block sm:hidden">
        <img
          src={cvImage}
          alt="CV Afsal Maulana"
          className="w-full h-auto"
        />
      </div>


      {}
      <div className="hidden sm:block">
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white text-gray-900 border border-gray-300 shadow-md leading-relaxed rounded-lg hide-scrollbar break-words">
          <header className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
              AFSAL MAULANA
            </h1>
            <p className="mt-2 text-xs sm:text-sm">
              |📞 081387272911 |{" "}
              <a
                href="mailto:afsalonline01@gmail.com"
                className="text-blue-600 underline"
              >
                ✉️ Gmail
              </a>{" "}
              <a
                href="mailto:afsalonline01@gmail.com"
                className="text-blue-600 underline"
              >
                <a href="https://afslm.vercel.app/">|🌐 Website</a>
              </a>{" "}
              | Jln Raya Ciracas Gg Bangi 1

            </p>
          </header>

          {}
          <section className="mb-6 text-xs sm:text-sm leading-relaxed">
            <p>
              Saya adalah lulusan Sistem Informasi dari Universitas Bina Sarana
              Informatika dengan IPK 3,86/4,00. Memiliki minat besar di bidang
              teknologi informasi dan pengalaman magang sebagai Full Stack
              Developer, Software Tester, serta IT Support. Selain itu, saya
              telah menyelesaikan beberapa pelatihan dan sertifikasi di bidang
              jaringan komputer dan teknisi komputer.
            </p>
          </section>

          <hr className="border-t-2 border-gray-700 mb-6" />

        
          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">PENDIDIKAN</h2>
            <p className="font-semibold text-sm sm:text-base">
              Universitas Bina Sarana Informatika | Sistem Informasi
            </p>
            <p className="text-xs sm:text-sm">IPK: 3,86 / 4,00 (2021 - 2025)</p>
          </section>

         
          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">
              PENGALAMAN MAGANG
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-2">
              <li>
                Walikota Depok – Full Stack Developer (Nov 2024 - Jan 2025)
              </li>
              <li>Vocasia – Software Tester (Feb 2024 - Jun 2024)</li>
              <li>Askrindo – IT Support (Jan 2020 - Mar 2020)</li>
            </ul>
          </section>

         
          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">
              PENDIDIKAN NONFORMAL
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-2">
              <li>Pelatihan Jaringan Komputer Madya (2022)</li>
              <li>Pelatihan Teknisi Komputer (2022)</li>
            </ul>
          </section>

        
          <section className="mb-6">
            <h2 className="font-bold text-base sm:text-lg mb-2">SERTIFIKASI</h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1">
              <li>BNSP – Network Administrator Madya (2022)</li>
              <li>BNSP – Analis Program (2024)</li>
              <li>Teknisi Komputer – PPKPI (2022)</li>
              <li>Jaringan Komputer Madya – PPKPI (2022)</li>
              <li>Pengelasan Kombinasi 3G & 4G (2025)</li>
            </ul>
          </section>

      
          <section>
            <h2 className="font-bold text-base sm:text-lg mb-2">SKILL</h2>
            <p className="text-xs sm:text-sm">
              <strong>Soft Skill:</strong> Teamwork, Kepemimpinan, Problem
              Solving, Time Management
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Hard Skill:</strong> Networking, Troubleshooting, Linux,
              PHP, Javascript, HTML, CSS, CI4, CI3
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Software Skill:</strong> Microsoft Office, Word, Excel,
              PowerPoint, Trello
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;



