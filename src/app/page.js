"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
    const [showScrollPrompt, setShowScrollPrompt] = useState(false);
    const [title, setTitle] = useState("Fretux");
    const [phase, setPhase] = useState("normal");
    useEffect(() => {
        let fadeTimeout;
        const interval = setInterval(() => {
            setPhase("fadeOut");
            fadeTimeout = setTimeout(() => {
                setTitle(prev => prev === "Fretux" ? "Frederik Spirgi" : "Fretux");
                setPhase("fadeIn");
                fadeTimeout = setTimeout(() => setPhase("normal"), 500);
            }, 500);
        }, 3000);
        return () => {
            clearInterval(interval);
            clearTimeout(fadeTimeout);
        };
    }, []);
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScrollPrompt(true);
        }, 1500);
        const handleScroll = () => {
            setShowScrollPrompt(false);
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className="container">
            {showScrollPrompt && (
                <div className="scrollPrompt">
                    <p>Scroll subtly</p>
                </div>
            )}
            <FadeInSection>
                <header className="header">
                    <h1 className={`title ${phase}`}>{title}</h1>
                    <p className="intro">
                        Welcome to my portfolio. I’m a developer passionate about building modern and responsive
                        applications.
                    </p>
                </header>
            </FadeInSection>
            <FadeInSection>
                <section className="section">
                    <div className="textLeft">
                        <p>
                            I&#39;m a passionate developer exploring web, game, and backend technologies with a focus on
                            innovation and creativity.
                        </p>
                    </div>
                    <div className="imageRight">
                        <Image
                            src="/images/portfolio1.jpg"
                            alt="Screenshot of a portfolio project"
                            width={500}
                            height={300}
                        />
                    </div>
                </section>
            </FadeInSection>
            <FadeInSection>
                <section className="section">
                    <div className="imageLeft">
                        <Image
                            src="/images/portfolio2.jpg"
                            alt="Another project snapshot"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="buttonLeft">
                        <Link href="/about">
                            <button className="learnMoreButton">Learn More</button>
                        </Link>
                    </div>
                </section>
            </FadeInSection>
        </div>
    );
}