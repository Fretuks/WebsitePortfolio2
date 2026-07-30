import Image from "next/image";
import Link from "next/link";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
    return (
        <>
            <div className="shell">
                <section className="hero">
                    <div>
                        <p className="eyebrow">Developer · Digital maker</p>
                        <h1>Code with<br/><em>character.</em></h1>
                    </div>
                    <div className="hero-side">
                        <div className="availability">Open to opportunities</div>
                        <p>I’m Frederik, a developer from Switzerland creating useful, expressive experiences across web, games, and software.</p>
                        <Link className="button" href="/projects">Explore my work</Link>
                    </div>
                </section>
            </div>
            <div className="marquee" aria-hidden="true">
                <span>JavaScript</span><b>✦</b><span>Python</span><b>✦</b><span>Java</span><b>✦</b>
                <span>Creative development</span><b>✦</b><span>Web experiences</span><b>✦</b><span>SQL</span>
            </div>
            <FadeInSection>
                <section className="shell featured">
                    <div className="featured-grid">
                        <div>
                            <p className="eyebrow">A little about me</p>
                            <h2>Curious by default.</h2>
                            <p>I like learning how things work, then making them work better. My projects move between polished interfaces, practical backend systems, and playful experiments.</p>
                            <Link className="button light" href="/about">My journey</Link>
                        </div>
                        <div className="image-frame">
                            <Image src="/images/portfolio1.jpg" alt="A featured development project" fill sizes="(max-width: 800px) 100vw, 60vw"/>
                        </div>
                    </div>
                </section>
            </FadeInSection>
        </>
    );
}
