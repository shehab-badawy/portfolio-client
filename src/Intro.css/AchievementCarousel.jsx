import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import "./AchievementCarousel.css";
import VisualCarousel from "./VisualCarousel";

export default function AchievementCarousel() {
  const [achievements, setAchievements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visualIndex, setVisualIndex] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/achievements`) // adjust endpoint as needed
      .then(res => {
        setAchievements(res.data);
      })
      .catch(err => {
        console.error("Failed to load achievements", err);
      });
  }, []);

  const current = achievements[currentIndex];

  const handleNextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    setVisualIndex(0);
  };

  const handlePrevAchievement = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    setVisualIndex(0);
  };

  const handleNextVisual = () => {
    if (!current || !current.visuals) return;
    setVisualIndex((prev) => (prev + 1) % current.visuals.length);
  };

  const handlePrevVisual = () => {
    if (!current || !current.visuals) return;
    setVisualIndex((prev) => (prev - 1 + current.visuals.length) % current.visuals.length);
  };

  if (!current) return <p>Loading...</p>;

  const imgSrc = current.visuals?.[visualIndex]?.id?.visualLink?.replace(
  /^server\//,
  `${BASE_URL}/images/files/`
);


  console.log("Current achievement:", current.visuals);
return (
  <div className="achievement-carousel-wrapper">
    <button className="achievement-nav-button" onClick={handlePrevAchievement}>◄</button>
    
    <div className="achievement-carousel">
      <div className="visual-container">
        <button onClick={handlePrevVisual}>▲</button>
        <VisualCarousel visualLink={current.visuals[visualIndex]?.id?.visualLink} />
        <button onClick={handleNextVisual}>▼</button>
      </div>

      <div className="achievement-details">
        <h4>{current.type?.name}</h4>
        <h2>{current.name}</h2>
        <p>{current.description}</p>
        <p><b>Technologies:</b> {(current.technologies || []).map(t => t.name).join(", ")}</p>
      </div>
    </div>

    <button className="achievement-nav-button" onClick={handleNextAchievement}>►</button>
  </div>
);

}
