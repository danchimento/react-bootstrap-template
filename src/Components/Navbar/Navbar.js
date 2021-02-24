import { Link } from "react-router-dom";
import "./Navbar.scss";
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';
import coursesIcon from '../../assets/icons/courses-icon.svg';
import gradesIcon from '../../assets/icons/grades-icon.svg';
import messagesIcon from '../../assets/icons/messages-icon.svg';
import projectsIcon from '../../assets/icons/projects-icon.svg';
import Icon from '../Icon/Icon';

export default function Navbar(props) {
    return (<nav id="sidebarMenu" className={`d-xs-block bg-white sidebar ${props.className}`}>
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            <Icon src={dashboardIcon} /> <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses">
            <Icon src={coursesIcon} /> <span>Courses</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/grades">
            <Icon src={gradesIcon} /> <span>Grades</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/messages">
            <Icon src={messagesIcon} /> <span>Messages</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects">
            <Icon src={projectsIcon} /> <span>Projects</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>)
}