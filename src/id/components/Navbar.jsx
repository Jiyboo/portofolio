import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);

      const nav = document.querySelector("nav");
      if (nav) {
        const intensity = Math.min(scrollY / 400, 1);
        nav.style.setProperty("--light-opacity", `${0.85 - intensity * 0.6}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("id"));
        }),
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/id")) {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
  }, [location.pathname]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (lang === "id") {
      navigate("/id");
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
        scrolled ? "bg-[#050b18]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        <Link
          to="/id"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_#2563eb]"
          />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#9333EA] text-[20px] font-bold cursor-pointer tracking-wide">
            Afsal <span className="hidden sm:inline">| Maulana</span>
          </p>
        </Link>

        
<ul className="list-none hidden sm:flex flex-row gap-10 items-center">

  {navLinks.map((nav) => (
    <li
      key={nav.id}
      className={`cursor-pointer text-[18px] font-medium flex items-center gap-2 transition-all duration-300 ${
        active === nav.id
          ? "text-white border-b-2 border-[#2563EB]"
          : "text-gray-400 hover:text-white"
      }`}
    >

<span
  className={`
    icon-base 
    ${nav.id === "about" && "icon-about"}
    ${nav.id === "works" && "icon-works"}
    ${nav.id === "resume" && "icon-resume"}
    ${active === nav.id ? "scale-125" : "opacity-70"}
  `}
/>




  <a
  href={`#${nav.id}`}
  className={`nav-text ${active === nav.id ? "show" : ""}`}
  onClick={(e) => {
    e.preventDefault();
    document.getElementById(nav.id).scrollIntoView({ behavior: "smooth" });
    setActive(nav.id);
  }}
>
  {nav.title}
</a>

    </li>
  ))}

  {/* FLAG SELECTOR */}
  <div className="flex items-center gap-3 ml-6">
    <div
      className={`flag flag-id cursor-pointer ${
        language === "id" ? "ring-2 ring-[#2563EB]" : ""
      }`}
      onClick={() => handleLanguageChange("id")}
    ></div>

    <div
      className={`flag flag-en cursor-pointer relative ${
        language === "en" ? "ring-2 ring-[#2563EB]" : ""
      }`}
      onClick={() => handleLanguageChange("en")}
    >
      <div className="cross-red-horizontal"></div>
      <div className="cross-red-vertical"></div>
    </div>
  </div>

</ul>


        
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#0b1220]/95 backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl flex-col gap-4 border border-[#2563EB]/40`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id
                      ? "text-white border-b border-[#2563EB]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(nav.id)
                        .scrollIntoView({ behavior: "smooth" });
                      setActive(nav.id);
                      setToggle(false);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>

            
            <div className="flex items-center gap-3 mt-4">
              <div
                className={`flag flag-id ${language === "id" ? "ring-2 ring-[#2563EB]" : ""}`}
                onClick={() => handleLanguageChange("id")}
              ></div>
              <div
                className={`flag flag-en ${language === "en" ? "ring-2 ring-[#2563EB]" : ""}`}
                onClick={() => handleLanguageChange("en")}
              >
                <div className="cross-red-horizontal"></div>
                <div className="cross-red-vertical"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
