import { Link } from 'react-router-dom';
import logo from '../../assets/icons/tozme-icon.svg';
import './Header.scss';

export default function Header() {
  return (
    <header className="navbar sticky-top justify-content-start p-0 bg-primary">
      <Link className="navbar-brand me-0 text-white" aria-current="page" to="/">
        <img src={logo} alt="logo" />
        <span>TOZME</span>
      </Link>
      {/* <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      {/* <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="#">Sign out</a>
        </li>
      </ul> */}
    </header>);
}