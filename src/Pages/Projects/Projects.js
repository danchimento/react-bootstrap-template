import './Projects.scss';
import ProjectColumn from '../../Components/ProjectColumn/ProjectColumn';
import { projects } from '../../Data';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="mb-4">Projects</h1>

            <div className="d-flex flex-row">
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