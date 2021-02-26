import './Grades.scss';
import { courses } from '../../Data';
import stackIcon from '../../assets/icons/stack-icon.svg';
import Icon from '../../Components/Icon/Icon';

export default function Grades() {
    let course = courses[0];
    let columns = ["Name", "Type", "Due By", "Completed", "Result", "Possible", "Weight"];

    return (
        <div id="grades">
            <div className="d-flex flex-row align-items-center mb-3">
                <h2 className="mb-0"><Icon className="fz-small" src={stackIcon} /> {course.code}: {course.title} </h2>
                <div className="ms-3 tz-grade bg-info text-white rounded-circle p-2 font-weight-semi-bold d-flex align-items-center justify-content-center fz-x-small pe-1">A-</div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        {columns.map(c =>
                            <th scope="col" className="text-center align-middle font-weight-semi-bold">{c}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {course.grades.map(g => {
                        return (<tr>
                            <td>{g.name}</td>
                            <td className="text-center">{g.type}</td>
                            <td className="text-center">{g.dueBy}</td>
                            <td className={`text-center ${g.late ? 'text-danger' : ''}`}>{g.completed}</td>
                            <td className="text-center">{g.result}</td>
                            <td className="text-center">{g.possible}</td>
                            <td className="text-center">{g.weight}%</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}