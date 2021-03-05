import NavCard from '../../Components/NavCard/NavCard';
import './Dashboard.scss';
import CourseCard from '../../Components/CourseCard/CourseCard';
import { courses, recentMessages, projectActivity, todos } from '../../Data';
import DashboardMessage from '../../Components/DashboardMessage/DashboardMessage';
import ProjectSummary from '../../Components/ProjectSummary/ProjectSummary';
import NavCalendar from '../../Components/NavCalendar/NavCalendar';

// eslint-disable-next-line 
import Tabs from 'bootstrap/js/dist/tab';
import TodoListItem from '../../Components/TodoListItem/TodoListItem';

export default function Dashboard() {

    return (
        <div id="dashboard">
            <div className="d-flex flex-row">
                <div className="cards-container flex-grow-1">
                    <div className="row">
                        <div className="col">
                            <NavCard className="tz-courses" title="My Courses" primary={true} linkText="All Courses" linkSrc="/courses">
                                {courses.slice(0, 3).map((c, i) => {
                                    let className =
                                        i === 0 ? "d-block" :
                                            i === 1 ? "d-none d-sm-block" :
                                                i === 2 ? "d-none d-xl-block" : "";

                                    return (
                                        <CourseCard
                                            className={className}
                                            courseCode={c.code}
                                            courseName={c.title}
                                            image={c.image}
                                            instructorName={c.instructorName}
                                            numStudents={c.numStudents} />
                                    )
                                })}
                            </NavCard>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-6">
                            <NavCard title="Recent Messages" linkText="All Messages" linkSrc="/messages">
                                <div className="mt-3">
                                    {recentMessages.map(m => {
                                        return (
                                            <div className="mb-4">
                                                <DashboardMessage message={m} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </NavCard>

                            <NavCard className="mt-3" title="Project Activity" linkText="All Projects" linkSrc="/projects">
                                <div className="mt-3">
                                    {projectActivity.map(p => {
                                        return <ProjectSummary project={p} />
                                    })}
                                </div>
                            </NavCard>
                        </div>
                        <div className="tz-todo col-12 col-md-6">
                            <NavCard>
                                <div>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a data-toggle="tab" className="nav-link active" href="#todo">TODO</a>
                                        </li>
                                        <li className="nav-item">
                                            <a data-toggle="tab" className="nav-link" href="#completed">COMPLETED</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active pt-3" id="todo" role="tabpanel" aria-labelledby="todo-tab">
                                            {todos.map((t, i) => {
                                                return <TodoListItem number={i + 1} item={t} />
                                            })}
                                        </div>
                                        <div className="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                                            COMPLETED
                                    </div>
                                    </div>
                                </div>
                            </NavCard>
                        </div>
                    </div>
                </div>
                <div className="calendar-container overflow-hidden bg-white p-3 align-self-start position-fixed right-0">
                    <NavCalendar />
                </div>
            </div>
        </div>
    );
}