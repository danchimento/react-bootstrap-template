import './Assignment.scss';
import checkIcon from '../../assets/icons/check-icon.svg';
import infoIcon from '../../assets/icons/info-icon.svg';
import Icon from '../Icon/Icon';

export default function Assignment(props) {
    let className = "tz-assignment row";
    if (props.className) className += ` ${props.className}`;

    return (
        <div className={className}>
            <div className="col-sm-auto">
                <div className="tz-assignment-icon rounded d-flex align-items-center justify-content-center" style={{ background: props.assignment.color }}>
                    <img src={props.assignment.icon} alt={props.assignment.title} />
                </div>
            </div>
            <div className="col d-flex justify-content-center flex-column">
                <div className="text-muted font-weight-medium">{props.assignment.title}</div>
                <div>
                    {renderStatus(props.assignment)}
                </div>
            </div>
        </div>
    )
}

function renderStatus(assignment) {
    switch (assignment.status) {
        case "Completed":
            return (
                <span className="text-white badge bg-success d-inline-flex align-items-center justify-content-center">
                    <Icon src={checkIcon} className="me-1"/> {assignment.status}
                </span>
            );
        case "In Progress":
            return (
                <span className="text-muted fz-x-small text-uppercase d-inline-flex align-items-center">
                    <span className="indicator bg-danger"></span>   {assignment.status}
                </span>
            );
        default:
            return (
                <span className="text-muted fz-x-small text-uppercase d-inline-flex align-items-center">
                    <span className="text-warning d-inline-flex">
                        <Icon src={infoIcon} className="me-1" />
                    </span>
                    {assignment.status}
                </span>
            )
    }
}