import './Projects.scss';
import ProjectColumn from '../../Components/ProjectColumn/ProjectColumn';
import { projects } from '../../Data';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="">Projects</h1>

            <div className="d-flex flex-row flex-wrap">

                <div className="d-flex flex-row align-items-center ms-4 flex-shrink-0">
                    <span className="text-muted">Show: </span>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            All Projects
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {projects.projects.map(p => <li key={p}><a className="dropdown-item" href={`#${p}`}>{p}</a></li>)}
                        </ul>
                    </div>
                </div>
                <div className="my-3 d-flex flex-row">
                    <div className="d-flex flex-row align-items-center ms-4 flex-shrink-0">
                        <span className="text-muted">Sort By: </span>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle font-weight-bold" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Due Date
                        </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {projects.projects.map(p => <li key={p}><a className="dropdown-item" href={`#${p}`}>{p}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row overflow-auto">
                {projects.columns.map(c => {
                    return <ProjectColumn className="me-3" title={c.title} canAdd={c.canAdd}>
                        {c.items.map(p => {
                            return <ProjectCard project={p} />
                        })}
                    </ProjectColumn>
                })}
            </div>
        </div>
    );
}