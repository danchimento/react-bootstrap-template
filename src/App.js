import './App.scss';
import * as bootstrap from 'bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faTh, faAward, faCommentAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import Courses from './Pages/Courses/Courses';
import Grades from './Pages/Grades/Grades';
import Messages from './Pages/Messages/Messages';
import Projects from './Pages/Projects/Projects';

export default function App() {

  return (
    <div className="App">
      <Router>

        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">TOZME</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
          {/* <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul> */}
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      <FontAwesomeIcon icon={faTh} /> Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/courses">
                      <FontAwesomeIcon icon={faUsers} /> Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/grades">
                      <FontAwesomeIcon icon={faAward} /> Grades
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/messages">
                      <FontAwesomeIcon icon={faCommentAlt} /> Messages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/projects">
                      <FontAwesomeIcon icon={faBars} /> Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/courses"><Courses /></Route>
                <Route path="/grades"><Grades /></Route>
                <Route path="/messages"><Messages /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/"><Dashboard /></Route>
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}
