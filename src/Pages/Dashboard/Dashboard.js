import NavCard from '../../Components/NavCard/NavCard';
import './Dashboard.scss';
import computerImage from '../../assets/images/computer-img.png';
import geologyImage from '../../assets/images/geology-img.png';
import engineeringImage from '../../assets/images/engineering-img.png';
import CourseCard from '../../Components/CourseCard/CourseCard';

export default function Dashboard() {
    return (
        <div id="dashboard">
            <NavCard title="My Courses" primary={true} linkText="All Courses" linkSrc="/courses">
                <CourseCard 
                    courseName="CSCI 100: Python" 
                    image={computerImage} 
                    instructorName="J. Winston"
                    numStudents={13} />
                <CourseCard 
                    courseName="GEO 205: MINERAL SURVEYING" 
                    image={geologyImage} 
                    instructorName="H. Smith" 
                    numStudents={62} />
                <CourseCard 
                    courseName="ENG 250: FUEL SYSTEMS" 
                    image={engineeringImage} 
                    instructorName="T. Payne"
                    numStudents={45} />
            </NavCard>
        </div>
    );
}