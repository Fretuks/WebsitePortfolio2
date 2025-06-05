"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInSection from "@/app/components/FadeInSection";

const projectData = [
    {
        title: "Red Lake Stats",
        description: "An interactive Javascript and Python application designed to calculate damage statistics for the Roblox game 'The Red Lake'",
        image: "/images/portfolio-project1.png",
        link: "https://fretux.ch/trlstats",
    },
    {
        title: "SBB-History",
        description: "A website about the creation of the SBB (Swiss Train Corporation) with an interactable map!",
        image: "/images/portfolio-project2.png",
        link: "https://sbb-history.fretux.ch",
    },
    {
        title: "Fretux.ch",
        description: "My first portfolio website, gameified for more user interaction.",
        image: "/images/portfolio-project3.png",
        link: "https://fretux.ch",
    },
    {
        title: "KnockedBack",
        description: "A minecraft mod that revamps dying.",
        image: "/images/KnockedBack.png",
        link: "https://modrinth.com/mod/knockedback",
    },
    {
        title: "Stalinium",
        description: "Another minecraft mod I made with some friends, that adds the fictional 'stalinium' ore to the game.",
        image: "/images/Stalinium.png",
        link: "https://modrinth.com/mod/stalinium-mod",
    },
];

export default function ProjectsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const handleNavigation = (direction) => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prev) => {
                const newIndex =
                    direction === "next"
                        ? (prev + 1) % projectData.length
                        : (prev - 1 + projectData.length) % projectData.length;
                return newIndex;
            });
            setFade(false);
        }, 300);
    };

    const project = projectData[currentIndex];

    return (
        <div className="projectContainer">
            <FadeInSection>
                <div className={`projectCard ${fade ? "fade-out" : "fade-in"}`}>
                    <h2 className="projectTitle">{project.title}</h2>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="projectImage"
                    />
                    <p className="projectDescription">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="learnMoreButton" style={{ marginTop: "1.5rem" }}>
                            View Project
                        </button>
                    </a>
                </div>
            </FadeInSection>
            <div className="projectNavigation">
                <button onClick={() => handleNavigation("prev")} className="arrowButton">
                    &larr;
                </button>
                <button onClick={() => handleNavigation("next")} className="arrowButton">
                    &rarr;
                </button>
            </div>
        </div>
    );
}