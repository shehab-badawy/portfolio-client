import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import "./AchievementCarousel.css";
import VisualCarousel from "./VisualCarousel";

import { useSwipeable } from 'react-swipeable';
import useIsMobile from "../hooks/useIsMobile"; // 👈 create this hook if not yet



export default function AchievementCarousel() {
  const [achievements, setAchievements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visualIndex, setVisualIndex] = useState(0);
  const [descVisible, setDescVisible] = useState(false);
  const isMobile = useIsMobile(); // 👈 detect if mobile


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


  const achievementSwipeHandlers = useSwipeable({
  onSwipedLeft: handleNextAchievement,
  onSwipedRight: handlePrevAchievement,
  trackTouch: true,
  preventScrollOnSwipe: true,
});


  const handleNextVisual = () => {
    if (!current || !current.visuals) return;
    setVisualIndex((prev) => (prev + 1) % current.visuals.length);
  };

  const handlePrevVisual = () => {
    if (!current || !current.visuals) return;
    setVisualIndex((prev) => (prev - 1 + current.visuals.length) % current.visuals.length);
  };

  if (!current) return <p>Loading...</p>;
return (

<div className="achievement-carousel-wrapper" {...(isMobile ? achievementSwipeHandlers : {})}>
       {isMobile && (
    <p className="swipe-hint-horizontal">Swipe ◄ ► to view more projects</p>
  )}
  <div className="achievement-carousel">

    {/* ◄ Left Navigation */}
    {!isMobile && (
      <button className="achievement-nav-button" onClick={handlePrevAchievement}>
        ◄
      </button>
    )}

    {/* === Achievements Details FIRST === */}
    <div className="achievement-details">
      <h4>{current.type?.name}</h4>
      <h2>{current.name}</h2>

      {isMobile && (
        <div className="toggle-row">
          <button
            className="toggle-button"
            onClick={() => setDescVisible((prev) => !prev)}
          >
            {descVisible ? '−' : '+'}
          </button>
          <span className="toggle-label">
            {descVisible ? "Hide Details" : "Show Details"}
          </span>
        </div>
      )}

      {/* Conditional Rendering Inside the Same Box */}
      {(!isMobile || descVisible) && (
        <>
          <p>{current.description}</p>
          <p><b>Technologies:</b> {(current.technologies || []).map(t => t.name).join(", ")}</p>
        </>
      )}
    </div>

    {/* === Visual SECOND === */}
<div className="visual-container">
  {(current.visuals.length > 1) && (
    <button onClick={handlePrevVisual}>▲</button>
  )}

  <VisualCarousel visualLink={current.visuals[visualIndex]?.id?.visualLink} />

  {(current.visuals.length > 1) && (
    <button onClick={handleNextVisual}>▼</button>
  )}
</div>

    {/* ► Right Navigation */}
        {!isMobile && (
      <button className="achievement-nav-button" onClick={handleNextAchievement}>
        ►
      </button>
    )}
  </div>
</div>


);

}
