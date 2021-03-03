import './Courses.scss';
import { courses } from '../../Data';
import { Link } from 'react-router-dom';
import Assignment from '../../Components/Assignment/Assignment';
import teacherImage from '../../assets/images/teacher-img.png';
import enlargeIcon from '../../assets/icons/enlarge-icon.svg';
import settingsIcon from '../../assets/icons/settings-icon.svg';
import minimizeIcon from '../../assets/icons/minimize-icon.svg';
import searchIcon from '../../assets/icons/search-icon.svg';
import Icon from '../../Components/Icon/Icon';

export default function Courses() {
    let course = courses[2];
    let assignment = course.schedule[0].assignments[2];

    return (
        <div id="courses" className="row">
            <div className="tz-course-list p-3 col-sm-auto pt-5 d-none d-sm-block">
                {courses.map((c, i) => {
                    return (
                        <Link className={`d-block mt-3 mb-3 rounded-circle ${i === 1 ? 'active' : ''}`} to="/courses">
                            <img className="" src={c.image} alt={c.title} />
                        </Link>)
                })}
            </div>
            <div className="tz-assignments col-sm-auto p-3 bg-white d-none d-lg-block">
                <div className="text-muted font-weight-semi-bold">{course.code}</div>
                <h3>{course.title}</h3>

                <div class="input-group my-3">
                    <span class="input-group-text">
                        <Icon src={searchIcon} />
                    </span>
                    <input className="form-control" placeholder="Search Courses" />
                </div>

                <div className="mt-3">
                    {course.schedule.map(s => {
                        return (
                            <div className="mb-4">
                                <div className="text-muted">{s.title}</div>
                                {s.assignments.map((a, i) => {
                                    let active = i === 2;
                                    return (
                                        <div className={`${active ? 'active' : ''} `}>
                                            <Assignment assignment={a} />
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="col">
                <div className="bg-white rounded-top overflow-hidden">
                    <div className="tz-lecture  mb-4 position-relative">
                        <img className="w-100" src={teacherImage} alt="lecture" />
                        <div className="position-absolute top-0 start-0 d-flex flex-row justify-content-between w-100 p-2">
                            <div className="badge bg-danger rounded d-flex align-items-center justify-content-center">LIVE</div>
                            <div >
                                <Icon src={enlargeIcon} />
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 end-0 p-2 d-flex flex-row">
                            <Icon className="me-2" src={settingsIcon} />
                            <Icon src={minimizeIcon} />
                        </div>
                    </div>
                    <div className="p-3">
                        <h3 className="mb-3">{assignment.title}</h3>
                        <div className="text-muted">
                            {assignment.by} | {assignment.date}
                        </div>
                        <div>
                            <ul class="nav nav-tabs mt-5">
                                <li class="nav-item">
                                    <a data-toggle="tab" class="nav-link" href="#transcript">TRANSCRIPT</a>
                                </li>
                                <li class="nav-item">
                                    <a data-toggle="tab" class="nav-link active" href="#assets">ASSETS</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade pt-3" id="transcript" role="tabpanel" aria-labelledby="todo-tab">

                                </div>
                                <div class="tab-pane fade show active pt-3" id="assets" role="tabpanel" aria-labelledby="completed-tab">

                                    {assignment.assets.map(a => {
                                        return (
                                            <div className="bg-secondary p-3 rounded">
                                                <div>{a.title}</div>
                                                <div className="text-muted">{a.description}</div>
                                                <div className="d-flex justify-content-end mt-2">
                                                    <button className="btn btn-info me-2 text-white">Open</button>
                                                    <button className="btn btn-primary">Download</button>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}