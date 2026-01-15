import React, { useEffect, useRef } from "react";
import * as animeModule from "animejs";
import "../Styles/Signup.css";

const AnimeBlobs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Vite/ESM Compatibility: Handle different import structures
    const anime = animeModule.default || animeModule;

    if (typeof anime === "function") {
      anime({
        targets: ".anime-blob",
        translateX: () => anime.random(-150, 150),
        translateY: () => anime.random(-150, 150),
        scale: () => anime.random(1.5, 2.5),
        rotate: () => anime.random(-15, 15),
        duration: () => anime.random(10000, 15000),
        delay: anime.stagger(400),
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
      });
    }
  }, []);

  return (
    <div className="blob-viewport" ref={containerRef}>
      <div className="anime-blob blob-1" />
      <div className="anime-blob blob-2" />
      <div className="anime-blob blob-3" />
      <div className="glass-overlay" />
    </div>
  );
};

export default AnimeBlobs;
