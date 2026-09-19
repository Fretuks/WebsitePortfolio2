"use client";

import {useState} from "react";
import Image from "next/image";
import {projects} from "./projects";

const categories = ["All", "Web & apps", "Minecraft", "Games", "Tools & bots"];

export default function ProjectGallery() {
    const [category, setCategory] = useState("All");
    const visibleProjects = projects.filter(project => category === "All" || project.category === category);

    return <section className="shell project-collection" aria-label="Project collection">
        <div className="project-toolbar">
            <div className="project-filters" role="group" aria-label="Filter projects by category">
                {categories.map(item => <button type="button" key={item} aria-pressed={category === item}
                    onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            <p className="project-count" role="status">{visibleProjects.length} projects</p>
        </div>
        <div className="projects-grid">{visibleProjects.map(project => (
            <a className="project-card" href={`https://github.com/Fretuks/${project.repo}`}
                target="_blank" rel="noopener noreferrer" key={project.repo}>
                <div className="project-image github-project-image">
                    <Image src={`/images/projects/${project.repo}.png`}
                        alt={`${project.title} GitHub repository preview`}
                        width={1200} height={600} sizes="(max-width: 800px) 100vw, 50vw"/>
                </div>
                <div className="project-meta"><h2>{project.title}</h2><span aria-hidden="true">↗</span></div>
                <p>{project.description}</p>
                <div className="skills">{project.stack.map(skill => <span className="skill" key={skill}>{skill}</span>)}</div>
                <div className="project-source"><span>View on GitHub</span>{project.attribution && <span>{project.attribution}</span>}</div>
            </a>
        ))}</div>
    </section>;
}
