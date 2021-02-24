import './CourseCard.scss';

export default function CourseCard(props) {
    return (
        <div className="tz-course-card">
            <img src={props.image} alt={props.courseName} />
            <div className="tz-course-card-body">
                <div className="tz-course-card-title">
                    {props.courseName}
                </div>
                <div className="tz-course-card-subtitle">
                    {props.instructorName} &#8226; {props.numStudents} Students
                </div>
                <button class="btn btn-secondary">
                    View Course
                </button>
            </div>
        </div>
    )
}