import Image from "next/image";
export const metadata = {title: "Projects"};
const projects = [
    {title: "Red Lake Stats", description: "An interactive JavaScript and Python tool for calculating damage statistics in the Roblox game The Red Lake.", image: "/images/portfolio-project1.png", link: "https://fretux.ch/trlstats"},
    {title: "SBB History", description: "An interactive journey through the creation of Switzerland’s railway company, featuring an explorable map.", image: "/images/portfolio-project2.png", link: "https://sbb-history.fretux.ch"},
    {title: "Fretux.ch", description: "My first portfolio—gamified to make exploring personal work feel more playful and memorable.", image: "/images/portfolio-project3.png", link: "https://fretux.ch"},
    {title: "KnockedBack", description: "A Minecraft mod that reimagines what happens when a player dies.", image: "/images/KnockedBack.png", link: "https://modrinth.com/mod/knockedback"},
    {title: "Stalinium", description: "A collaborative Minecraft mod adding the fictional Stalinium ore and a new layer of progression.", image: "/images/Stalinium.png", link: "https://modrinth.com/mod/stalinium-mod"},
];
export default function ProjectsPage() {
    return (<>
        <header className="page-head"><div className="shell page-head-row">
            <div><p className="eyebrow">Selected work</p><h1 className="page-title">Things I’ve<br/>made.</h1></div>
            <p className="page-intro">A mix of useful tools, interactive websites, and game modifications—each built to explore a new idea.</p>
        </div></header>
        <div className="shell projects-grid">{projects.map(project => (
            <a className="project-card" href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
                <div className="project-image"><Image src={project.image} alt={`${project.title} project preview`} width={800} height={550}/></div>
                <div className="project-meta"><h2>{project.title}</h2><span aria-hidden="true">↗</span></div><p>{project.description}</p>
            </a>
        ))}</div>
    </>);
}
