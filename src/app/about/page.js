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
            date: "2022",
            title: "Exploring Web Development",
            content: "Started creating my first website and got into HTML and CSS."
        },
        {
            date: "2023",
            title: "Diving into Informatics",
            content: "Started with Python and basic exploration of 'real' programming."
        },
        {
            date: "2024",
            title: "Full Stack & Beyond",
            content: "Ventured into backend (SQL, Python) and frontend using Javascript"
        }
    ];

    const sectionRefs = timelineData.map(() => useRef(null));
    const aboutMeRef = useRef(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [timelineFinished, setTimelineFinished] = useState(false);
    const [isManualScroll, setIsManualScroll] = useState(false); // Track user scrolling
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        setCurrentSection(0); // Reset timeline
        setTimelineFinished(false);

        // Ensure 'About Me' is visible on reload
        setTimeout(() => {
            aboutMeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    }, []);

    // Handle button navigation
    const handleButtonClick = (direction) => {
        setIsManualScroll(false); // Ensure programmatic scrolling happens
        setCurrentSection((prev) => {
            const newSection = Math.max(0, Math.min(prev + direction, timelineData.length - 1));
            if (newSection === timelineData.length - 1) {
                setTimelineFinished(true);
            }
            return newSection;
        });
    };

    // Scroll to current section (only if not manually scrolling)
    useEffect(() => {
        if (!isManualScroll) {
            sectionRefs[currentSection]?.current?.scrollIntoView({behavior: "smooth", inline: "start"});
        }
    }, [currentSection, isManualScroll]);
    useEffect(() => {
        const handleScroll = () => {
            setIsManualScroll(true);
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    // Intersection Observer to detect when last section is fully visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target === sectionRefs[timelineData.length - 1].current) {
                        setTimelineFinished(true);
                    }
                });
            },
            {threshold: 0.8} // Increased threshold to ensure full visibility before triggering
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
                    Scroll down to check out my coding journey through the years!
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
                    <h2 style={{fontSize: "2rem", marginBottom: "1rem"}}>My Skills</h2>
                    <p style={{maxWidth: "600px", textAlign: "center"}}>
                        By completing projects in web development, scripting, and game
                        design, I’ve cultivated a diverse set of skills — spanning
                        JavaScript, Python, C#, and more!
                    </p>
                </section>
            )}
        </div>
    );
}