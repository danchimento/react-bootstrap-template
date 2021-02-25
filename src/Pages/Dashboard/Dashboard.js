import NavCard from '../../Components/NavCard/NavCard';
import './Dashboard.scss';
import CourseCard from '../../Components/CourseCard/CourseCard';
import { courses, recentMessages } from '../../Data';
import DashboardMessage from '../../Components/DashboardMessage/DashboardMessage';

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
                        
                    </NavCard>
                </div>
                <div className="col col-sm-12 col-md-6">
                    <NavCard>
                        
                    </NavCard>
                </div>
            </div>
        </div>
    );
}