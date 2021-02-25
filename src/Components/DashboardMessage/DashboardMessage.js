import './DashboardMessage.scss';

export default function DashboardMessage(props) {
    return (
        <div className="tz-dashboard-message">
            <div className="row">
                <div className="col-sm-auto">
                    <img src={props.message.senderProfileImage} alt={`${props.message.senderFirstName}`} />
                </div>
                <div className="col">
                    <div>
                    <strong>{props.message.senderFirstName} : </strong>
                    <span>{props.message.message}</span>
                    </div>
                    <div className="text-muted">
                        {props.message.sentTimeAgo} ago
                    </div>
                </div>
            </div>
        </div>
    )
}