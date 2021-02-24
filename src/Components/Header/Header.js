import { Link } from 'react-router-dom';
import logo from '../../assets/icons/tozme-icon.svg';
import './Header.scss';

export default function () {
  return (
    <header className="navbar sticky-top  p-0 bg-primary">
      <div className="row w-100">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 ps-3 text-white" aria-current="page" to="/">
          <img src={logo} />
          TOZME

        </Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="col-md-9 col-lg-10 d-flex align-items-center">
          <input className="form-control w-50" type="text" placeholder="Search" aria-label="Search" />
        </div>
        {/* <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="#">Sign out</a>
        </li>
      </ul> */}
      </div>
    </header>);
}