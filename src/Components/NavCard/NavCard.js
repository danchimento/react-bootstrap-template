import { Link } from 'react-router-dom';
import './NavCard.scss';

export default function NavCard(props) {
    return (
        <div className={`tz-nav-card ${props.className ? props.className : ""}`}>
            <div className="tz-nav-card-header">
                {props.title}
                {props.linkSrc ? <Link className="link link-info" to={props.linkSrc}>{props.linkText}</Link> : ""}
            </div>
            <div className="tz-nav-card-body">
                {props.children}
            </div>
        </div>
    )
}