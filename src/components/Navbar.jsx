import React, { useState } from "react";
import "./Navbar.css";
import { Github, Linkedin, FileText, Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#achievements" className="nav-link">Achievements</a>
      <a href="#contact" className="nav-link">Contact</a>
      <a href="https://www.linkedin.com/in/shehab-badawy/" target="_blank" rel="noreferrer" className="nav-link">
        <Linkedin size={16} /> LinkedIn
      </a>
      <a href="https://github.com/shehab-badawy" target="_blank" rel="noreferrer" className="nav-link">
        <Github size={16} /> GitHub
      </a>
      <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-link">
        <FileText size={16} /> Resume
      </a>
    </>
  );

  return (
    <nav className="navbar">
      <span className="navbar-title">Shehab Radwan</span>

      {/* Desktop Menu */}
      <div className="nav-links desktop-only">
        {navLinks}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="mobile-only" onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }}>
        <Menu size={22} />
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
