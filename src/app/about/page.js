"use client"
import {useRef, useState, useEffect} from "react";

export default function About() {
    const timelineData = [
        {
            date: "2018",
            title: "First Contact with Coding",
            content: "I discovered my passion for technology by experimenting with Scratch and creating some simple Games."
        },
        {
            date: "2020",
            title: "Exploring Web & Scripting",
            content: "Started creating small websites and got into JavaScript, CSS, and working with various scripting languages."
        },
        {
            date: "2022",
            title: "Diving into Game Development",
            content: "Tried Unity and C#, building small 2D and 3D prototypes to expand my skill set."
        },
        {
            date: "2024",
            title: "Full Stack & Beyond",
            content: "Ventured into backend (SQL, Python) and continued refining my frontend abilities, always exploring new challenges."
        }
    ];

    const skills = [
        { name: "JavaScript", level: 80, waveSpeed: "2s" },
        { name: "Python", level: 75, waveSpeed: "2.5s" },
        { name: "C#", level: 50, waveSpeed: "3s" },
        { name: "SQL", level: 85, waveSpeed: "2.2s" },
        { name: "HTML & CSS", level: 70, waveSpeed: "2.7s" },
    ];

    const sectionRefs = timelineData.map(() => useRef(null));
    const aboutMeRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const [currentSection, setCurrentSection] = useState(0);
    const [timelineFinished, setTimelineFinished] = useState(false);

    // Scroll to 'About Me' title and reset timeline on page load
    useEffect(() => {
        setCurrentSection(0); // Reset timeline
        setTimelineFinished(false);

        setTimeout(() => {
            aboutMeRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
        }, 100);
    }, []);

    // Handle button navigation
    const handleButtonClick = (direction) => {
        setCurrentSection((prev) => {
            const newSection = Math.max(0, Math.min(prev + direction, timelineData.length - 1));
            if (newSection === timelineData.length - 1) {
                setTimelineFinished(true);
            } else {
                setTimelineFinished(false);
            }
            sectionRefs[newSection]?.current?.scrollIntoView({behavior: "smooth", inline: "start"});
            return newSection;
        });
    };

    // Track scrolling manually and update currentSection
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) {
                            setCurrentSection(index);
                            setTimelineFinished(index === timelineData.length - 1);
                        }
                    }
                });
            },
            {threshold: 0.6}
        );

        sectionRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

    return (
        <div style={{width: "100%", overflowX: "hidden"}}>
            {/* About Me Section */}
            <section
                ref={aboutMeRef}
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
                <h1 style={{fontSize: "2.5rem", marginBottom: "1rem"}}>About Me</h1>
                <p style={{maxWidth: "600px", textAlign: "center"}}>
                    I’m a passionate developer always excited about new challenges.
                    Scroll down to learn more about me!
                </p>
            </section>

            {/* Timeline Section */}
            <section style={{position: "relative", height: "100vh", overflowY: "hidden"}}>
                {currentSection > 0 && (
                    <button
                        onClick={() => handleButtonClick(-1)}
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
                {currentSection < timelineData.length - 1 && (
                    <button
                        onClick={() => handleButtonClick(1)}
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
                <div
                    ref={scrollContainerRef}
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
                            <h2 style={{marginBottom: "1rem"}}>{item.title}</h2>
                            <h3 style={{marginBottom: "1rem"}}>{item.date}</h3>
                            <p style={{maxWidth: "600px", textAlign: "center"}}>{item.content}</p>
                        </section>
                    ))}
                </div>
            </section>

            {/* Skills Section with Liquid Progress Bars */}
            {timelineFinished && (
                <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", color: "#fff" }}>
                    <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>My Skills</h2>

                    <div style={{ display: "flex", gap: "2rem" }}>
                        {skills.map((skill, index) => (
                            <div key={index} style={{ textAlign: "center" }}>
                                <div style={{ width: "60px", height: "200px", backgroundColor: "#333", borderRadius: "10px", overflow: "hidden", position: "relative", border: "2px solid #555" }}>
                                    <div className="liquid" style={{
                                        width: "100%",
                                        height: `${skill.level}%`,
                                        position: "absolute",
                                        bottom: 0,
                                        background: "linear-gradient(45deg, #7400a9, #411357)",
                                        borderTop: "4px solid rgba(255, 255, 255, 0.6)",
                                        animation: `wave ${skill.waveSpeed} infinite ease-in-out`,
                                    }}><p style={{ marginTop: "10px", fontSize: "1rem" }}>{skill.level}%</p></div>
                                </div>
                                <p style={{ marginTop: "10px", fontSize: "1rem" }}>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}