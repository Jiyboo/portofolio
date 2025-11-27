import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/afsl.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      {/*
      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={24} />
      </a>*/
      <a
        href="https://www.linkedin.com/in/afsal-maulana-31122002af//"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>}
    </footer>
  );
};

export default Footer;