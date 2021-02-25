import Calendar from "react-calendar";
import Icon from "../Icon/Icon";
import clockIcon from '../../assets/icons/clock-icon.svg';
import "./NavCalendar.scss";

export default function NavCalendar() {
    return (
        <nav id="calendarMenu" className="d-xs-block bg-white sidebar">
            <div className="position-sticky pt-3 w-100">
                <h3>March 2021</h3>
                <Calendar showNavigation={false}/>

                <div className="tz-today rounded w-100 p-2 pb-3 mt-3">
                    <div className="text-warning mb-2 font-weight-bold">Today</div>
                    <div className="mb-2 font-weight-semi-bold">ART 102: INTRODUCTION TO DRAWING</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    
                    <div className="mt-2 fz-smaller font-weight-medium">
                        <Icon src={clockIcon} /> 9:40 AM - 11:40 AM (2 HOURS)
                    </div>
                </div>

            </div>
        </nav>
    )
}