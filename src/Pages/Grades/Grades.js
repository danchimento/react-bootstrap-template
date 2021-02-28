import './Grades.scss';
import { courses } from '../../Data';
import stackIcon from '../../assets/icons/stack-icon.svg';
import Icon from '../../Components/Icon/Icon';

export default function Grades() {
    let course = courses[0];

    return (
        <div id="grades">
            <div className="d-flex flex-row align-items-center mb-3">
                <h2 className="mb-0"><Icon className="fz-small" src={stackIcon} /> {course.code}: {course.title} </h2>
                <div className="ms-3 tz-grade bg-info text-white rounded-circle p-2 font-weight-semi-bold d-flex align-items-center justify-content-center fz-x-small">{course.grade}</div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold ">Name</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold d-none d-sm-table-cell">Type</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold d-none d-md-table-cell">Due By</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold d-none d-md-table-cell">Completed</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold">Result</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold">Possible</th>
                        <th scope="col" className="text-center align-middle font-weight-semi-bold d-none d-md-table-cell">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {course.grades.map(g => {
                        return (<tr>
                            <td>{g.name}</td>
                            <td className="text-center d-none d-sm-table-cell">{g.type}</td>
                            <td className="text-center d-none d-md-table-cell">{g.dueBy}</td>
                            <td className={`text-center d-none d-md-table-cell ${g.late ? 'text-danger' : ''}`}>{g.completed}</td>
                            <td className="text-center">{g.result}</td>
                            <td className="text-center">{g.possible}</td>
                            <td className="text-center d-none d-md-table-cell">{g.weight}%</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}