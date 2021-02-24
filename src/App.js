import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Courses from './Pages/Courses/Courses';
import Grades from './Pages/Grades/Grades';
import Messages from './Pages/Messages/Messages';
import Projects from './Pages/Projects/Projects';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import NavCalendar from './Components/NavCalendar/NavCalendar';

export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <div className="container-fluid d-flex p-0">
            <Navbar />

            <main>
              <Switch>
                <Route path="/courses"><Courses /></Route>
                <Route path="/grades"><Grades /></Route>
                <Route path="/messages"><Messages /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/"><Dashboard /></Route>
              </Switch>
            </main>

            <NavCalendar />
        </div>
      </Router>
    </div>
  );
}
