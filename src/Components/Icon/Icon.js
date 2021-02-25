import "./Icon.scss";

export default function Icon(props) {
    return(<img className={`tz-icon ${props.className ? props.className : ""}`} src={props.src} alt="icon"/>)
}