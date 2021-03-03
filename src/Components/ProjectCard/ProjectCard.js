import './ProjectCard.scss';
import Icon from '../Icon/Icon';
import attachmentIcon from '../../assets/icons/paperclip-icon.svg';
import checkIcon from '../../assets/icons/check-icon.svg';
import clockIcon from '../../assets/icons/clock-icon.svg';
import AccountImage from '../AccountImage/AccountImage';


export default function ProjectCard(props) {
    let className = "tz-project-card rounded border p-3 mb-2 ";
    className += props.project.style;

    return (
        <div className={className} style={{ backgroundColor: props.project.color }}>
            <div className="tz-project-card-title font-weight-semi-bold mb-2">{props.project.title}</div>
            <div className="text-muted mb-2">{props.project.course}</div>
            <div className="d-flex flex-row text-muted mb-3 align-items-center">
                <div className="me-3 d-flex align-items-center">
                    <Icon className="me-2" src={attachmentIcon} /> {props.project.attachments}
                </div>
                <div className="me-3 d-flex align-items-center">
                    <Icon className="me-2" src={checkIcon} /> {props.project.completedTasks}/{props.project.totalTasks}
                </div>
                {renderTimeRemainingBadge(props.project)}
            </div>
            {renderProgressBar(props.project)}
            {renderAssignees(props.project)}
        </div>
    )
}

function renderProgressBar(project) {
    if (!project.showProgressBar) return;
    let percentComplete = (project.completedTasks / project.totalTasks) * 100;
    return (<div>
        <div className="text-muted d-flex flex-row justify-content-end">
           <div>{percentComplete}%</div>
        </div>
        <div className="progress mb-3" style={{ height: 5 }}>
            <div
                style={{ width: `${percentComplete}%` }}
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow={percentComplete}
                aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    </div>)
}

function renderTimeRemainingBadge(project) {
    if (!project.timeRemaining) return;
    let className = "tz-time-remaining badge ";
    className += project.timeRemainingStatus;

    return <div className={className}>
        <Icon src={clockIcon} /> {project.timeRemaining} left
    </div>
}

function renderAssignees(project) {
    return (
        <div className="d-flex flex-row mb-3">
            {project.assignees.map((a, i) => {
                if (i <= 1) return <AccountImage className="me-2" account={a} />
                else return ""
            })}

            {project.assignees.length > 2 ?
                <div className="rounded-circle tz-account-image border text-muted d-flex align-items-center justify-content-center">
                    +{project.assignees.length - 2}
                </div> : ""}
        </div>
    )
}