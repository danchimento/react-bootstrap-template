import './App.scss';
import * as bootstrap from 'bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
import Orders from './Orders/Orders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt, faColumns } from '@fortawesome/free-solid-svg-icons'

export default function App() {

  return (
    <div className="App">
      <Router>

        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      <FontAwesomeIcon icon={faColumns} /> Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/orders">
                      <FontAwesomeIcon icon={faReceipt} /> Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/orders">
                  <Orders />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}
