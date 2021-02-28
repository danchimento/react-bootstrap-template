import "./AccountImage.scss";

export default function AccountImage(props) {
    let className = "tz-account-image rounded-circle overflow-hidden d-flex align-items-center justify-content-center text-white font-weight-medium ";
    if (props.className) className += props.className;
    if (props.image) className += 'border';

    return (
        <div className={className} style={{ backgroundColor: props.account.color }}>
            {props.account.image 
            ? <img src={props.account.image} alt="Account" />
            : <span>{props.account.firstName[0]}{props.account.lastName[0]}</span>}
        </div>
    )
}