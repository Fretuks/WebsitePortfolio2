"use client";

import { useRef, useState, useEffect } from "react";

export default function About() {
  // Timeline data
  const timelineData = [
    {
      date: "2018",
      title: "First Contact with Coding",
      content:
        "I discovered my passion for technology by experimenting with Scratch and creating some simple Games.",
    },
    {
      date: "2020",
      title: "Exploring Web & Scripting",
      content:
        "Started creating small websites and got into JavaScript, CSS, and working with various scripting languages.",
    },
    {
      date: "2022",
      title: "Diving into Game Development",
      content:
        "Tried Unity and C#, building small 2D and 3D prototypes to expand my skill set.",
    },
    {
      date: "2024",
      title: "Full Stack & Beyond",
      content:
        "Ventured into backend (SQL, Python) and continued refining my frontend abilities, always exploring new challenges.",
    },
  ];

  // Disable lint for calling hooks in a loop
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const sectionRefs = timelineData.map(() => useRef(null));

  const [currentSection, setCurrentSection] = useState(0);

  // Keep track if the user has reached the last section in the timeline
  const [timelineFinished, setTimelineFinished] = useState(false);

  // Keyboard navigation (left / right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrentSection((prev) => Math.min(prev + 1, timelineData.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSection((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [timelineData.length]);

  // Scroll the timeline horizontally to the currently selected section
  useEffect(() => {
    sectionRefs[currentSection].current?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    // If we are on the last section, mark timeline as finished
    if (currentSection === timelineData.length - 1) {
      setTimelineFinished(true);
    }
  }, [currentSection, sectionRefs]);

  // Navigate left or right with on-screen buttons
  const goLeft = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };

  const goRight = () => {
    setCurrentSection((prev) => Math.min(prev + 1, timelineData.length - 1));
  };

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>

      {/* ─────────────────────────────
          1) Intro / Top Section
      ────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>
        <p style={{ maxWidth: "600px", textAlign: "center" }}>
          I’m a passionate developer always excited about new challenges.
          Scroll down to check out my coding journey through the years!
        </p>
      </section>

      {/* ─────────────────────────────
          2) Timeline Section
      ────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          overflowY: "hidden", // Prevent vertical scroll here
        }}
      >
        {/* Only show the left button if we're not on the first section */}
        {currentSection > 0 && (
          <button
            onClick={goLeft}
            style={{
              position: "absolute",
              top: "50%",
              left: "1rem",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1rem",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            &larr;
          </button>
        )}

        {/* Only show the right button if we're not on the last section */}
        {currentSection < timelineData.length - 1 && (
          <button
            onClick={goRight}
            style={{
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              padding: "0.75rem 1rem",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            &rarr;
          </button>
        )}

        {/* Horizontal scroll area */}
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            width: "100%",
            height: "100%",
            scrollBehavior: "smooth",
          }}
        >
          {timelineData.map((item, index) => (
            <section
              key={index}
              ref={sectionRefs[index]}
              style={{
                flex: "0 0 100%",
                scrollSnapAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                boxSizing: "border-box",
              }}
            >
              <h2 style={{ marginBottom: "1rem" }}>{item.title}</h2>
              <h3 style={{ marginBottom: "1rem" }}>{item.date}</h3>
              <p style={{ maxWidth: "600px", textAlign: "center" }}>
                {item.content}
              </p>
            </section>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────
          3) Skills Section
          Only visible if timelineFinished
      ────────────────────────────── */}
      {timelineFinished && (
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>My Skills</h2>
          <p style={{ maxWidth: "600px", textAlign: "center" }}>
            By completing projects in web development, scripting, and game
            design, I’ve cultivated a diverse set of skills — spanning
            JavaScript, Python, C#, and more!
          </p>
        </section>
      )}
    </div>
  );
}