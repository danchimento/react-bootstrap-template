import './Contact.scss';

export default function Contact(props) {
    let className = "tz-contact rounded d-flex flex-row p-2 ";
    if (props.selected) className += "bg-info selected ";

    return (
        <div className={className}>
            <div className="">
                <img className="tz-contact-image rounded-circle border border-white me-3" src={props.contact.image} alt={props.contact.name} />
            </div> 
            <div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <div className="font-weight-medium">{props.contact.name}</div>
                        <div className="font-weight-light">{props.contact.handle}</div>
                    </div>
                    <div className="text-muted fz-smaller">
                        {props.contact.lastMessageDate}
                    </div>
                </div>
                <div className="text-muted mt-3">{props.contact.lastMessagePreview}</div>
            </div>
        </div>
    )
}