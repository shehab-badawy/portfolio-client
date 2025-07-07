import AchievementCarousel from "../components/AchievementCarousel";
import React from "react";
import "../App.css";
import Intro from "../components/Intro";
import Contact from "../components/Contact";

export default function Home() {
  return (
<div>
  <Intro />
  <hr className="section-divider" />

  <section id="achievements">
    <h2 className="section-title">Achievements</h2>
    <AchievementCarousel />
  </section>
<Contact />
</div>

  );
}
