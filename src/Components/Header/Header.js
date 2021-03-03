import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icons/tozme-icon.svg';
import notificationIcon from '../../assets/icons/notification-icon.svg';
import tasklistIcon from '../../assets/icons/tasklist-icon.svg';
import calendarIcon from '../../assets/icons/calendar-icon.svg';
import Icon from '../../Components/Icon/Icon';
import './Header.scss';

export default function Header() {
  const location = useLocation();

  return (
    <header className="navbar sticky-top justify-content-start p-0 bg-primary d-flex flex-row">
      <Link className="navbar-brand me-0 text-white" aria-current="page" to="/">
        <img src={logo} alt="logo" />
        <span>TOZME</span>
      </Link>

      <input className="form-control ms-3" type="text" placeholder="Search" aria-label="Search" />

      <div className="flex-grow-1 d-flex flex-row justify-content-end pe-5 fz-large">
       {location.pathname.indexOf("dashboard") < 0 ? <Icon className="me-2" src={tasklistIcon} /> : ""}
       {location.pathname.indexOf("dashboard") < 0 ? <Icon className="me-2" src={calendarIcon} /> : ""}
        <Icon className="me-2" src={notificationIcon} />
      </div>
    </header>);
}