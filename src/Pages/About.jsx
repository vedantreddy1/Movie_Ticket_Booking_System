import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import"../styles/About.module.css";

const About = () => {
  const canvasRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    let cw = (c.width = window.innerWidth);
    let ch = (c.height = window.innerHeight);
    let radius = Math.max(cw, ch);

    const particles = Array.from({ length: 90 }, (_, i) => ({
      x: 0,
      y: 0,
      scale: 0,
      rotate: 0,
      img: (() => {
        const img = new Image();
        img.src = `https://assets.codepen.io/16327/flair-${2 + (i % 21)}.png`;
        return img;
      })(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      particles.forEach((p) => {
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate(p.rotate);
        ctx.drawImage(
          p.img,
          p.x,
          p.y,
          p.img.width * p.scale,
          p.img.height * p.scale
        );
        ctx.resetTransform();
      });
    };

    tlRef.current = gsap
      .timeline({ onUpdate: draw })
      .fromTo(
        particles,
        {
          x: (i) => Math.cos(i) * radius,
          y: (i) => Math.sin(i) * radius,
          scale: 1,
        },
        {
          duration: 5,
          x: 0,
          y: 0,
          scale: 0,
          rotate: -3,
          stagger: { each: -0.05, repeat: -1 },
          ease: "sine",
        }
      )
      .seek(99);

    const resize = () => {
      cw = c.width = window.innerWidth;
      ch = c.height = window.innerHeight;
      radius = Math.max(cw, ch);
      tlRef.current.invalidate();
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      tlRef.current.kill();
    };
  }, []);

  return (
    <>
      {/* <Navbar /> */}

      <section className="relative h-screen overflow-hidden text-white ">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

        {/* Content */}
        <div className="containe relative z-20 h-full overflow-y-auto px-6 md:px-20 py-24 ">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-yellow-400">BookingTell</span> 🎬
              
            </h1>
            <br />
            <p className=" text-gray-300 max-w-2xl mx-auto bg-yello0 ">
              A modern movie ticket booking platform built for speed,
              simplicity, and a cinematic experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:-translate-y-2 transition">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                Who We Are
              </h2>
              <p className="text-gray-300">
                BookingTell is a user-focused movie ticket booking application
                that combines smooth UI, performance, and real-world booking
                flow.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:-translate-y-2 transition">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                What We Do
              </h2>
              <p className="text-gray-300">
                We let users explore movies, choose seats interactively, and
                book tickets effortlessly in just a few clicks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:-translate-y-2 transition">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                Why BookingTell
              </h2>
              <ul className="text-gray-300 space-y-1">
                <li>🎟️ Quick & easy booking</li>
                <li>🪑 Interactive seat selection</li>
                <li>⚡ Smooth animations</li>
                <li>📱 Mobile-friendly design</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:-translate-y-2 transition">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                Tech Stack
              </h2>
              <p className="text-gray-300">
                React · Tailwind CSS · Node.js · Express · MongoDB · GSAP
              </p>
            </div>
          </div>

          {/* Hint */}
          <p className="text-center text-sm text-gray-400 mt-14">
            Tap anywhere to pause / play animation
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
