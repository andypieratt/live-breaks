import React from "react";
import "./footer.css";
import { Github } from "@emotion-icons/bootstrap/Github";
import { Linkedin } from "@emotion-icons/bootstrap/Linkedin";

const Footer = () => {
  return (
    <footer className="footer-main">
      <a href="https://github.com/andypieratt" rel="noopener noreferrer">
        <Github size="30" />
      </a>
      <a
        href="https://www.linkedin.com/in/andrew-pieratt"
        rel="noopener noreferrer"
      >
        <Linkedin size="30" />
      </a>
    </footer>
  );
};

export default Footer;
