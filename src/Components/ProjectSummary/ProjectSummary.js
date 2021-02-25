import "./ProjectSummary.scss";
import Icon from '../Icon/Icon';
import clockIcon from '../../assets/icons/clock-icon.svg';

export default function ProjectSummary(props) {
    return (
        <div className="tz-project-summary mb-3">
            <div className="row">
                <div class="tz-project-summary-title col">{props.project.title}</div>
                <div class="col-sm-auto text-warning"><Icon className="me-1" src={clockIcon} /> {props.project.remainingTime} left</div>
            </div>
            <div className="row">
                <div class="col">
                    <div class="d-flex flex-column align-items-end text-muted">
                        85%
                    </div>
                    <div class="progress">
                        <div 
                            style={{ width: props.project.progressPercent }}
                            class="progress-bar bg-success" 
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