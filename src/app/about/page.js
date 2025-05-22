"use client"
import {useRef, useState, useEffect} from "react";
import Link from "next/link";

export default function About() {
    const timelineData = [
        {
            date: "2018",
            title: "First Contact with Coding",
            content:
                "I discovered my passion for technology by experimenting with Scratch and creating some simple Games.",
        },
        {
            date: "2022",
            title: "Exploring Web & Scripting",
            content:
                "Started creating small websites and got into HTML, CSS",
        },
        {
            date: "2022",
            title: "Raspberry Pi & Python",
            content:
                "Created some simple Python scripts for my Raspberry Pi, experimenting with the Raspberry Pi OS",
        },
        {
            date: "2024",
            title: "Full Stack & Beyond",
            content:
                "Ventured into backend (SQL, Python, Javascript, Java) and continued refining my frontend abilities.",
        },
    ];

    const skills = [
        {
            name: "JavaScript",
            level: 80,
            waveSpeed: "2s",
            progression: [0, 30, 60, 80],
        },
        {
            name: "Python",
            level: 75,
            waveSpeed: "2.5s",
            progression: [10, 25, 50, 75],
        },
        {
            name: "Java",
            level: 50,
            waveSpeed: "3s",
            progression: [0, 0, 0, 60],
        },
        {
            name: "SQL",
            level: 85,
            waveSpeed: "2.2s",
            progression: [0, 0, 0, 85],
        },
        {
            name: "HTML & CSS",
            level: 70,
            waveSpeed: "2.7s",
            progression: [0, 30, 50, 80],
        },
    ];

    const getSkillLabel = (level) => {
        if (level < 25) return "Beginner";
        if (level < 50) return "Intermediate";
        if (level < 75) return "Advanced";
        return "Expert";
    };

    const sectionRefs = useRef([]);
    const aboutMeRef = useRef(null);
    const buttonSectionRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [timelineFinished, setTimelineFinished] = useState(false);
    const [showScrollPrompt, setShowScrollPrompt] = useState(false);
    useEffect(() => {
        setCurrentSection(0);
        setTimelineFinished(false);
        setTimeout(() => {
            aboutMeRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
        }, 100);
    }, []);
    useEffect(() => {
        let scrollListener;

        if (timelineFinished) {
            setShowScrollPrompt(true);

            scrollListener = () => {
                setShowScrollPrompt(false);
                window.removeEventListener("scroll", scrollListener);
            };

            window.addEventListener("scroll", scrollListener);
        }

        return () => {
            if (scrollListener) {
                window.removeEventListener("scroll", scrollListener);
            }
        };
    }, [timelineFinished]);
    const handleButtonClick = (direction) => {
        setCurrentSection((prev) => {
            const newSection = Math.max(0, Math.min(prev + direction, timelineData.length - 1));
            setTimelineFinished(newSection === timelineData.length - 1);
            sectionRefs.current[newSection]?.scrollIntoView({behavior: "smooth", inline: "start"});
            return newSection;
        });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = sectionRefs.current.findIndex((el) => el === entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setCurrentSection(index);
                    }
                    if (
                        entry.isIntersecting &&
                        index === timelineData.length - 1 &&
                        entry.intersectionRatio >= 0.8
                    ) {
                        setTimelineFinished(true);
                    }
                });
            },
            {threshold: 0.6}
        );
        sectionRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [timelineData.length]);
    return (
        // Ändern Sie den äußeren Container-Style
        <div style={{
            width: "100%",
            position: "relative", // Hinzugefügt
            overflowX: "hidden"
        }}>
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
            <section style={{ position: "relative", height: "100vh", overflowY: "hidden" }}>
                {/* Navigation buttons and timeline content here */}
                <div ref={scrollContainerRef} style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", width: "100%", height: "100%", scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {timelineData.map((item, index) => {
                        const adjustedSkills = skills.map((s) => {
                            const stepLevel = s.progression?.[index] ?? 0;
                            return {
                                ...s,
                                level: Math.floor((s.level * stepLevel) / 100),
                            };
                        });
                        return (
                            <section
                                key={index}
                                ref={(el) => (sectionRefs.current[index] = el)}
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
                                <h2>{item.title}</h2>
                                <h3>{item.date}</h3>
                                <p>{item.content}</p>
                                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
                                    {adjustedSkills.filter((s) => s.level > 0).map((skill, sIndex) => (
                                        <div
                                            key={`${skill.name}-${index}`}
                                            className={currentSection === index ? "skill-card animate-skill" : "skill-card"}
                                            style={{ textAlign: "center", width: "120px", animationDelay: `${sIndex * 100}ms`, animationFillMode: "both" }}
                                        >
                                            <p style={{ fontWeight: "bold" }}>{skill.name}</p>
                                            <div style={{ padding: "0.5rem 1rem", backgroundColor: "#1a001a", border: "2px solid #3d003d", borderRadius: "10px", color: "#fff" }}>
                                                {getSkillLabel(skill.level)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>

                {currentSection > 0 && (
                    <button onClick={() => handleButtonClick(-1)} style={{ position: "absolute", top: "50%", left: "1rem", transform: "translateY(-50%)", zIndex: 10, backgroundColor: "#333", color: "#fff", border: "none", padding: "0.75rem 1rem", cursor: "pointer", borderRadius: "4px" }}>
                        &larr;
                    </button>
                )}
                {currentSection < timelineData.length - 1 && (
                    <button onClick={() => handleButtonClick(1)} style={{ position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%)", zIndex: 10, backgroundColor: "#333", color: "#fff", border: "none", padding: "0.75rem 1rem", cursor: "pointer", borderRadius: "4px" }}>
                        &rarr;
                    </button>
                )}
            </section>
            {timelineFinished && showScrollPrompt && (
                <div className="scrollPrompt">
                    ⬇ Scroll down to continue ⬇
                </div>
            )}
            {/* FINAL BUTTON SECTION - MOVED OUTSIDE */}
            {timelineFinished && (
                // Fügen Sie dem Button-Section einen z-Index hinzu
                <section
                    ref={buttonSectionRef}
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        padding: "2rem",
                        boxSizing: "border-box",
                        position: "relative", // Hinzugefügt
                        zIndex: 1 // Hinzugefügt
                    }}
                >
                    <Link href="/projects">
                        <button
                            className="learnMoreButton"
                            style={{
                                padding: "1rem 2rem",
                                fontSize: "1.25rem",
                                backgroundColor: "#3d003d",
                                border: "none",
                                borderRadius: "5px",
                                color: "#fff",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2e002e")}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3d003d")}
                        >
                            View Projects
                        </button>
                    </Link>
                </section>
            )}
        </div>
    )
}