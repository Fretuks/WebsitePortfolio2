import ProjectGallery from "./ProjectGallery";
import {projects} from "./projects";
export const metadata = {title: "Projects"};
export default function ProjectsPage() {
    return (<>
        <header className="page-head"><div className="shell page-head-row">
            <div><p className="eyebrow">Open-source work</p><h1 className="page-title">Things I’ve<br/>made.</h1></div>
            <div className="page-intro">
                <p>From everyday tools to mods and games, a collection of {projects.length} projects to explore and build on.</p>
                <a className="text-link" href="https://github.com/Fretuks" target="_blank" rel="noopener noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
            </div>
        </div></header>
        <ProjectGallery/>
    </>);
}
