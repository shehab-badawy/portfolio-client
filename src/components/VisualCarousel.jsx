import React from "react";
import BASE_URL from "../config";

function VisualCarousel({ visualLink }) {
  if (!visualLink) return null;

  const isYouTube = visualLink.includes("youtube.com") || visualLink.includes("youtu.be");

  if (isYouTube) {
    let videoId = "";

    if (visualLink.includes("youtu.be/")) {
      videoId = visualLink.split("youtu.be/")[1];
    } else if (visualLink.includes("watch?v=")) {
      videoId = visualLink.split("watch?v=")[1].split("&")[0];
    }

    const embedLink = `https://www.youtube.com/embed/${videoId}`;

    return (
      <iframe
        className="visual"
        src={embedLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  }

  const imageLink = visualLink.replace(/^server\//, `${BASE_URL}/images/files/`);

  return (
    <img
      className="visual"
      src={imageLink}
      alt="Achievement visual"
      // loading="lazy"
    />
  );
}

export default React.memo(VisualCarousel);
