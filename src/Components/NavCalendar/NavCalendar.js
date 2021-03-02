import Calendar from "react-calendar";
import Icon from "../Icon/Icon";
import clockIcon from '../../assets/icons/clock-icon.svg';
import "./NavCalendar.scss";
import { upcomingEvents } from '../../Data';

export default function NavCalendar(props) {
    let className = "sidebar";
    if (props.className) {
        className += ` ${props.className}`;
    }

    return (
        <nav id="calendarMenu" className={className}>
            <div className="p-3 pb-5 w-100">
                <h3>March 2021</h3>
                <Calendar showNavigation={false}/>

                <div className="tz-today rounded w-100 pb-3 p-2 mt-3">
                    <div className="text-warning mb-2 font-weight-bold">Today</div>
                    <div className="mb-2 font-weight-semi-bold">ART 102: INTRODUCTION TO DRAWING</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    
                    <div className="mt-2 fz-smaller font-weight-medium">
                        <Icon src={clockIcon} /> 9:40 AM - 11:40 AM (2 HOURS)
                    </div>
                </div>

                <div className="text-warning mt-4 font-weight-medium">Upcoming</div>
                {upcomingEvents.map(e => {
                    return (
                        <div className="mt-4">
                            <div className="fz-medium font-weight-medium">{e.title}</div>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="text-muted">
                                    <span className="indicator me-1 d-inline-block rounded-circle" style={{ backgroundColor: `${e.color}` }}></span> 
                                    {e.type}
                                </div>
                                <div className="text-muted">
                                    {e.dueDate}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </nav>
    )
}