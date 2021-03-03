import "./ProjectSummary.scss";
import Icon from '../Icon/Icon';
import clockIcon from '../../assets/icons/clock-icon.svg';

export default function ProjectSummary(props) {
    return (
        <div className="tz-project-summary mb-3">
            <div className="row">
                <div className="tz-project-summary-title col">{props.project.title}</div>
                <div className="col-sm-auto text-warning"><Icon className="me-1" src={clockIcon} /> {props.project.remainingTime} left</div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="d-flex flex-column align-items-end text-muted">
                        85%
                    </div>
                    <div className="progress">
                        <div 
                            style={{ width: props.project.progressPercent }}
                            className="progress-bar bg-success" 
                            role="progressbar" 
                            aria-valuenow={props.project.progressPercent} 
                            aria-valuemin="0" 
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}