import './Contact.scss';
import Icon from '../Icon/Icon';
import attachmentIcon from '../../assets/icons/paperclip-icon.svg';

export default function Contact(props) {
    let className = "tz-contact rounded d-flex flex-row p-2 ";
    if (props.selected) className += "bg-info selected ";
    if (props.contact.unread) className += "unread ";

    return (
        <div className={className}>
            <div className="d-flex flex-column align-items-center me-3">
                <img className="tz-contact-image rounded-circle border border-white mb-3" src={props.contact.image} alt={props.contact.name} />
                {props.contact.attachment ? <Icon src={attachmentIcon} /> : ""}
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