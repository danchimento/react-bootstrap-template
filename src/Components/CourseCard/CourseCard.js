import './CourseCard.scss';

export default function CourseCard(props) {
    let className = "tz-course-card bordered rounded";
    if (props.className) className += ` ${props.className}`;

    return (
        <div className={className}>
            <img src={props.image} alt={props.courseName} />
            <div className="tz-course-card-body">
                <div className="tz-course-card-title">
                    {props.courseCode}: {props.courseName}
                </div>
                <div className="tz-course-card-subtitle">
                    {props.instructorName} &#8226; {props.numStudents} Students
                </div>
                <button className="btn btn-secondary">
                    View Course
                </button>
            </div>
        </div>
    )
}