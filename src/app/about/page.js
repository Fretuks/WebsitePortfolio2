import Link from "next/link";
export const metadata = {title: "About"};
const timeline = [
    {year: "2018", title: "The first spark", text: "I discovered programming through Scratch, turning small ideas into simple, playable games.", skills: ["Scratch", "Game logic"]},
    {year: "2022", title: "Into the web", text: "I began building websites and learned the foundations of HTML, CSS, and accessible interface design.", skills: ["HTML", "CSS", "JavaScript"]},
    {year: "2022", title: "From screen to hardware", text: "A Raspberry Pi opened the door to Python scripting, Linux, and the fun of connecting software with real hardware.", skills: ["Python", "Linux", "Raspberry Pi"]},
    {year: "2024", title: "Full stack & beyond", text: "I expanded into databases, backend systems, Java, and larger projects—while continuing to sharpen my eye for frontend craft.", skills: ["SQL", "Python", "Java", "JavaScript"]},
];
export default function About() {
    return (<>
        <header className="page-head"><div className="shell page-head-row">
            <div><p className="eyebrow">About me</p><h1 className="page-title">Always<br/>learning.</h1></div>
            <p className="page-intro">I’m a developer driven by curiosity, thoughtful details, and the satisfying moment when a complex problem finally clicks.</p>
        </div></header>
        <div className="shell about-grid">
            <aside className="about-sticky">
                <p className="eyebrow">My path so far</p><h2>From playful experiments to complete products.</h2>
                <p>Every project has added a new tool, a sharper instinct, or a better question to ask.</p>
                <Link href="/projects" className="button">View projects</Link>
            </aside>
            <div className="timeline">{timeline.map(item => (
                <article className="timeline-item" key={`${item.year}-${item.title}`}>
                    <div className="timeline-year">{item.year}</div>
                    <div><h3>{item.title}</h3><p>{item.text}</p><div className="skills">{item.skills.map(skill => <span className="skill" key={skill}>{skill}</span>)}</div></div>
                </article>
            ))}</div>
        </div>
    </>);
}
