import './Messages.scss';
import { conversations } from '../../Data';
import Contact from '../../Components/Contact/Contact';
import Message from '../../Components/Message/Message';
import Icon from '../../Components/Icon/Icon';
import emojiIcon from '../../assets/icons/emoji-icon.svg';
import attachmentIcon from '../../assets/icons/paperclip-icon.svg';
import accountImage from '../../assets/images/person3-img.png';
import searchIcon from '../../assets/icons/search-icon.svg';
import ellipsesIcon from '../../assets/icons/ellipses-icon.svg';

export default function Messages() {
    let conversation = conversations[0];
    return (
        <div id="messages" className="d-flex flex-row">
            <div className="tz-contacts-list bg-white px-2 flex-shrink-1 border-end d-none d-sm-block">
                <div class="input-group mb-3 mt-2">
                    <span class="input-group-text">
                        <Icon src={searchIcon} />
                    </span>
                    <input className="form-control" placeholder="Search Courses" />
                </div>

                {conversations.map((c, i) => {
                    return (
                        <div className="tz-contact-container py-2 border-bottom">
                            <Contact selected={i === 0} contact={c} />
                        </div>)
                })}
            </div>
            <div className="tz-messages-list">
                <div className="bg-white p-3 d-flex flex-row align-items-center">
                    <img className="tz-account-image rounded-circle border me-2" src={conversation.image} alt="Profile" />
                    <span className="font-weight-semi-bold">{conversation.name}</span>
                    <span className="text-muted mx-2">|</span>
                    <span className="text-success font-weight-regular">{conversation.status}</span>

                    <span className="text-end flex-grow-1">
                        <Icon src={ellipsesIcon}  />
                    </span>
                </div>
                <div className= " p-3">
                    {conversation.messages.map(m => {
                        return <Message message={m} />
                    })}
                </div>

                <div className="tz-messages-send p-3 bottom-0 bg-white d-flex flex-row">
                    <img className="rounded-circle border me-2" src={accountImage} alt="Profile" />
                    <input placeholder="Say something" className="form-control"></input>
                    <div className="fz-larger d-flex flex-row align-items-center">
                        <Icon className="ms-2" src={emojiIcon} />
                        <Icon className="mx-2" src={attachmentIcon} />
                    </div>
                </div>
            </div>

        </div>
    );
}