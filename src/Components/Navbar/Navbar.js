import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faTh, faAward, faCommentAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "./Navbar.scss";
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';
import coursesIcon from '../../assets/icons/courses-icon.svg';
import gradesIcon from '../../assets/icons/grades-icon.svg';
import messagesIcon from '../../assets/icons/messages-icon.svg';
import projectsIcon from '../../assets/icons/projects-icon.svg';
import Icon from '../Icon/Icon';
import Courses from '../../Pages/Courses/Courses';

export default function(props) {
    return (<nav id="sidebarMenu" className={`d-md-block bg-white sidebar collapse ${props.className}`}>
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            <Icon src={dashboardIcon} /> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/courses">
            <Icon src={coursesIcon} /> Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/grades">
            <Icon src={gradesIcon} /> Grades
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/messages">
            <Icon src={messagesIcon} /> Messages
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/projects">
            <Icon src={projectsIcon} /> Projects
          </Link>
        </li>
      </ul>
    </div>
  </nav>)
}