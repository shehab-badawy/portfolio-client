import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section id="intro" className="intro-section">
      <img src="/shehab-formal.jpg" alt="Shehab Badawy" className="intro-photo" />
    <div className="intro-text">
            <p className="intro-label">Hi, my name is</p>
            <h1 className="intro-name">Shehab Radwan</h1>
            <h2 className="intro-tagline">Always eager to learn</h2>
            <p className="intro-description">
              I'm a computer engineering graduate and current MEng student at the University of Ottawa,
              passionate about software development, embedded systems, and machine learning. I've worked on a
              wide range of projects, including backend systems using Spring Boot and NestJS, gesture-controlled
              interfaces with MediaPipe, and embedded applications involving microcontrollers and sensor integration.
              I'm always eager to explore new technologies and tackle challenging problems. Outside of tech, I enjoy
              playing padel tennis, diving into story-rich video games like Baldur’s Gate 3 and Sekiro, and
              discovering new cultures through travel.
            </p>
    </div>
    </section>
  );
}
