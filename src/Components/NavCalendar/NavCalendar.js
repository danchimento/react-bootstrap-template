import Calendar from "react-calendar";
import "./NavCalendar.scss";

export default function NavCalendar() {
    return (
        <nav id="calendarMenu" className="d-xs-block bg-white sidebar">
            <div className="position-sticky pt-3">
                <h3>March 2021</h3>
                <Calendar showNavigation={false}/>
            </div>
        </nav>
    )
}