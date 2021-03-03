import './Message.scss';
import Icon from '../Icon/Icon';
import viewFileIcon from '../../assets/icons/viewfile-icon.svg';
import downloadIcon from '../../assets/icons/download-icon.svg';

export default function Message(props) {
    let className = "tz-message mb-3 d-flex flex-row align-items-center";
    if (props.className) className += " ";
    if (props.message.sender === "@Me") className += " me"

    return (
        <div className={className}>
            {!props.message.file ? 
            <div className="tz-message-body rounded border p-3 font-weight-light flex-grow-1">
                {props.message.message}
            </div> :
            <div className="tz-message-attachment rounded border p-3 fz-larger font-weight-regular d-flex flex-column"> 
                {props.message.file.title}
                <div className="badge align-self-start">{props.message.file.size}</div>
                <div className="mt-5 d-flex flex-row justify-content-between flex-grow-1 align-items-end">
                    <div className="d-flex flex-row fz-larger">
                        <Icon className="me-2" src={downloadIcon} />
                        <Icon src={viewFileIcon} />
                    </div>
                    <div className="tz-message-attachment-type">
                        {props.message.file.type}
                    </div>
                </div>
            </div>
            }
            <div className="flex text-muted flex-shrink-0 mx-2">
                {props.message.date}
            </div>
        </div>
    )
}