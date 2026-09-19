import Link from "next/link";
import Image from "next/image";

export const metadata = {title: "About"};
const timeline = [
    {
        year: "2018",
        title: "The first spark",
        text: "I discovered programming through Scratch, turning small ideas into simple, playable games.",
        skills: ["Scratch", "Game logic"]
    },
    {
        year: "2022",
        title: "Web & hardware",
        text: "I started building websites and exploring Python and Linux with a Raspberry Pi.",
        skills: ["HTML & CSS", "JavaScript", "Python", "Linux"]
    },
    {
        year: "2025", title: "Useful tools & web apps",
        text: "From Autoclicker and this portfolio to AI chat and Discord bots, I began building tools with interfaces, accounts, and backend systems.",
        skills: ["Python", "Next.js", "Express", "SQLite"],
    },
    {
        year: "2026", title: "From web to mobile",
        text: "The IDPA Webshop connected a React storefront to a REST API. Shoppy took that work to mobile with barcode scanning and personal shopping recommendations.",
        skills: ["React", "REST APIs", "React Native", "Expo"],
    },
    {
        year: "2026", title: "Games & gameplay systems",
        text: "I expanded my Minecraft work with Ascend and companion mods, while building Linux Distro Roguelite, a Unity card game inspired by Linux and programming.",
        skills: ["Java", "Forge", "Unity", "C#"],
    },
];
export default function About() {
    return (<>
        <header className="page-head">
            <div className="shell page-head-row">
                <div><p className="eyebrow">About me</p><h1 className="page-title">Always<br/>learning.</h1></div>
                <p className="page-intro">I’m a developer driven by curiosity and that satisfying moment when a complex
                    problem finally clicks.</p>
            </div>
        </header>
        <div className="shell about-grid">
            <aside className="about-sticky">
                <div className="image-frame about-portrait portrait-frame">
                    <Image src="/images/Fred3.png" alt="Frederik outdoors in a striped shirt" fill
                           sizes="(max-width: 800px) 100vw, 40vw"/>
                </div>
                <p className="eyebrow">My path so far</p><h2>From playful experiments to complete products.</h2>
                <p>Every project has added a new tool or a better idea (occasionally both).</p>
                <Link href="/projects" className="button">View projects</Link>
            </aside>
            <div className="timeline">{timeline.map(item => (
                <article className="timeline-item" key={`${item.year}-${item.title}`}>
                    <div className="timeline-year">{item.year}</div>
                    <div>
                        <h3>{item.title}</h3><p>{item.text}</p>
                        <div className="skills">{item.skills.map(skill => <span className="skill"
                                                                                key={skill}>{skill}</span>)}</div>
                    </div>
                </article>
            ))}</div>
        </div>
    </>);
}
