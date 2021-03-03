import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';
import coursesIcon from '../../assets/icons/courses-icon.svg';
import gradesIcon from '../../assets/icons/grades-icon.svg';
import messagesIcon from '../../assets/icons/messages-icon.svg';
import projectsIcon from '../../assets/icons/projects-icon.svg';
import accountImage from '../../assets/images/person3-img.png';
import Icon from '../Icon/Icon';
import { apps } from '../../Data';

export default function Navbar(props) {

  const location = useLocation();

  let navItems = [
    {
      title: "Dashbaord",
      src: "/dashboard",
      icon: dashboardIcon,
    },
    {
      title: "Courses",
      src: "/courses",
      icon: coursesIcon
    }, {
      title: "Grades",
      src: "/grades",
      icon: gradesIcon
    }, {
      title: "Messages",
      src: "/messages",
      icon: messagesIcon
    }, {
      title: "Projects",
      src: "/projects",
      icon: projectsIcon
    },
  ]

  return (
    <nav id="sidebarMenu" className={`bg-white sidebar ${props.className}`}>
        <div className="p-2 px-3 bg-light d-flex flex-row align-items-center justify-content-start tz-account rounded border mb-3">
          <img className="rounded-circle" alt="Profile" src={accountImage} />
          <div className="ms-2 d-none d-md-block">
            <div className="font-weight-semi-bold">Stephen Alkins</div>
            <div className="text-muted fz-small">@StephenAlkins</div>
          </div>
        </div>
        <ul className="nav flex-column">
          {navItems.map(i =>
            <li className={`nav-item mt-2 ${location.pathname.indexOf(i.src) >= 0 ? 'active ' : ' '}`}>
              
              <div className="active-indicator"></div>

              <Link className="nav-link active font-weight-semi-bold" aria-current="page" to={i.src}>
                <Icon className="me-3" src={i.icon} /> <span>{i.title}</span>
              </Link>
            </li>
          )}
        </ul>
        <div className="text-muted font-weight-medium mt-4 px-2 mb-2">APPS</div>
        <ul className="nav flex-column " id="apps">
          {apps.map(i =>
            <li className="nav-item">
              <Link className="nav-link active font-weight-semi-bold" aria-current="page" to={i.src}>
                <Icon className="me-3" src={i.icon} /> <span className="font-weight-light">{i.title}</span>
              </Link>
            </li>
          )}
        </ul>
    </nav>)
};