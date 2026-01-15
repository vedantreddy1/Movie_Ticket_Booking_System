import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Balls.css";

const AmbientBackground = () => {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  useEffect(() => {
    blobsRef.current.forEach((blob) => {
      // Create unique, randomized floating paths for each blob
      gsap.to(blob, {
        x: "random(-100, 100)vw",
        y: "random(-100, 100)vh",
        scale: "random(1, 2.5)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="ambient-wrapper" ref={containerRef}>
      <div className="overlay" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (blobsRef.current[i] = el)}
          className={`blob blob-${i}`}
        />
      ))}
    </div>
  );
};

export default AmbientBackground;
