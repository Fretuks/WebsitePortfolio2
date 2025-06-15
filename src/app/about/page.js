"use client"
import {useRef, useState, useEffect} from "react";
import Link from "next/link";
import FadeInSection from "@/app/components/FadeInSection";

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

    function getSkillEmoji(name) {
        switch (name) {
            case "JavaScript": return "🟨";
            case "Python": return "🐍";
            case "Java": return "☕";
            case "SQL": return "💾";
            case "HTML & CSS": return "🎨";
            default: return "💡";
        }
    }

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
            sectionRefs.current[0]?.scrollIntoView({behavior: "auto", inline: "start"});
            window.scrollTo({top: 0, behavior: "smooth"});
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
    const [isNavigating, setIsNavigating] = useState(false);
    const handleButtonClick = (direction) => {
        if (isNavigating) return;
        setIsNavigating(true);
        setCurrentSection((prev) => {
            const newSection = Math.max(0, Math.min(prev + direction, timelineData.length - 1));
            sectionRefs.current[newSection]?.scrollIntoView({behavior: "smooth", inline: "start"});
            return newSection;
        });
        setTimeout(() => {
            setIsNavigating(false);
        }, 600);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = sectionRefs.current.findIndex((el) => el === entry.target);
                    if (entry.isIntersecting && index !== -1) {
                        setCurrentSection(index);
                    }
                    if (entry.isIntersecting && index === timelineData.length - 1) {
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
    useEffect(() => {
        setTimelineFinished(currentSection === timelineData.length - 1);
    }, [currentSection, timelineData.length]);
    return (
        <div style={{
            width: "100%",
            position: "relative",
            overflowX: "hidden"
        }}>
            <FadeInSection>
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
                    <h1 style={{fontSize: "3.5rem", marginBottom: "1rem"}}>About Me</h1>
                    <p style={{maxWidth: "600px", textAlign: "center", fontWeight: "300", fontSize: "1.5rem"}}>
                        I’m a passionate developer always excited about new challenges.
                        Scroll down to learn more about me!
                    </p>
                </section>
            </FadeInSection>
            {/* Timeline Section */}
            <section style={{position: "relative", height: "100vh", overflowY: "hidden"}}>
                {/* Navigation buttons and timeline content here */}
                <div ref={scrollContainerRef} style={{
                    display: "flex",
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    width: "100%",
                    height: "100%",
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                }}>
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
                                className="timeline-page"
                            >
                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <span className="timeline-date">{item.date}</span>
                                        <h2>{item.title}</h2>
                                    </div>
                                    <p className="timeline-content">{item.content}</p>
                                    <div className="timeline-skills">
                                        {adjustedSkills.filter((s) => s.level > 0).map((skill, sIndex) => (
                                            <span
                                                key={`${skill.name}-${index}`}
                                                className={`skill-badge skill-${getSkillLabel(skill.level).toLowerCase()}`}
                                                style={{ animationDelay: `${sIndex * 80}ms` }}
                                            >
                    {getSkillEmoji(skill.name)} {skill.name}
                                                <span className="skill-level">{getSkillLabel(skill.level)}</span>
                </span>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
                {currentSection > 0 && (
                    <button
                        onClick={() => handleButtonClick(-1)}
                        className="timeline-arrow-btn left"
                        aria-label="Previous"
                    >
                        &larr;
                    </button>
                )}
                {currentSection < timelineData.length - 1 && (
                    <button
                        onClick={() => handleButtonClick(1)}
                        className="timeline-arrow-btn right"
                        aria-label="Next"
                    >
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