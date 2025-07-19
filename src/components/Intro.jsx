import React, { useState, useEffect } from "react";
import "./Intro.css";

export default function Intro() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullText = `I'm a computer engineering graduate and current MEng student at the University of Ottawa,
  passionate about software development, embedded systems, and machine learning. I've worked on a
  wide range of projects, including backend systems using Spring Boot and NestJS, gesture-controlled
  interfaces with MediaPipe, and embedded applications involving microcontrollers and sensor integration.
  I'm always eager to explore new technologies and tackle challenging problems. Outside of tech, I enjoy
  playing padel tennis, diving into story-rich video games like Baldur’s Gate 3 and Sekiro, and
  discovering new cultures through travel.`;

  const previewText = fullText.slice(0, 250) + "...";

  return (
    <section id="intro" className="intro-section">
      <img src="/shehab-formal.jpg" alt="Shehab Badawy" className="intro-photo" />

      <div className="intro-text">
        <p className="intro-label">Hi, my name is</p>
        <h1 className="intro-name">Shehab Radwan</h1>
        <h2 className="intro-tagline">Always eager to learn</h2>

        <p className="intro-description">
          {isMobile && !expanded ? previewText : fullText}
        </p>

        {isMobile && (
          <button className="see-more-btn" onClick={() => setExpanded(prev => !prev)}>
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
}
