import React, { useState } from "react";
import JNlogo from "../image/JN-logo-resized.png";
import email from "../image/email-icon.png";
import resume from "../assets/John-Nelson-2024.pdf";
import "../styling/Header.css";

const Header = ({ onShowResume }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={JNlogo} alt="JN Logo" />
        <a href="mailto:Jnelson6689@gmail.com" className="email">
          <img src={email} alt="Email Icon" className="email-icon" />
          <span>Jnelson6689@gmail.com</span>
        </a>
      </div>
      <nav className="header-right">
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#resume" onClick={onShowResume}>
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
