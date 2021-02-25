import NavCard from '../../Components/NavCard/NavCard';
import './Dashboard.scss';
import CourseCard from '../../Components/CourseCard/CourseCard';
import { courses, recentMessages, projectActivity, todos  } from '../../Data';
import DashboardMessage from '../../Components/DashboardMessage/DashboardMessage';
import ProjectSummary from '../../Components/ProjectSummary/ProjectSummary';

// eslint-disable-next-line 
import Tabs from 'bootstrap/js/dist/tab';
import TodoListItem from '../../Components/TodoListItem/TodoListItem';

export default function Dashboard() {

    return (
        <div id="dashboard">
            <div class="row">
                <div class="col">
                    <NavCard title="My Courses" primary={true} linkText="All Courses" linkSrc="/courses">
                        {courses.map(c => {
                            return (
                                <CourseCard
                                    courseName={c.title}
                                    image={c.image}
                                    instructorName={c.instructorName}
                                    numStudents={c.numStudents} />
                            )
                        })}
                    </NavCard>
                </div>
            </div>
            <div class="row mt-3">
                <div className="col col-sm-12 col-md-6">
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
                <div className="tz-todo col col-sm-12 col-md-6">
                    <NavCard>
                        <div>
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a data-toggle="tab" class="nav-link active" href="#todo">TODO</a>
                                </li>
                                <li class="nav-item">
                                    <a data-toggle="tab" class="nav-link" href="#completed">COMPLETED</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active pt-3" id="todo" role="tabpanel" aria-labelledby="todo-tab">
                                    {todos.map((t, i) => {
                                        return <TodoListItem number={i + 1} item={t} />
                                    })}
                                </div>
                                <div class="tab-pane fade" id="completed" role="tabpanel" aria-labelledby="completed-tab">
                                    COMPLETED
                                </div>
                            </div>
                        </div>
                    </NavCard>
                </div>
            </div>
        </div>
    );
}